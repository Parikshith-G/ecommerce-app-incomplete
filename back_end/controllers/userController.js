const User = require("../models/usermodule");
const { hashPassword,comparePasswords } = require("../utils/hashPassword");
const generateAuthToken = require("../utils/generateAuthToken");
const Review=require('../models/reviewmodule')
const Product=require('../models/ProductModule')



const getUsers = async (req, res, next) => {


  try {
    const users = await User.find({}).select("-password");
    return res.json(users);
  } 
  catch (err) {
    next(err);
  }
};

const registerUser = async (req, res, next) => {
  
    try {
    const { name, lastName, email, password } = req.body;
    if (!(name && lastName && email && password)) {
      return res.status(400).send("All inputs are required");
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).send("user exists");
    } else {
      const hashedPassword = hashPassword(password);
      const user = await User.create({
        name,
        lastName,
        email: email.toLowerCase(),
        password: hashedPassword,
      });
      res
        .cookie(
          "access_token",
          generateAuthToken(
            user._id,
            user.name,
            user.lastName,
            user.email,
            user.isAdmin
          ),
          {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
          }
        )
        .status(201)
        .json({
          success: "User created",
          userCreated: {
            _id: user._id,
            name: user.name,
            lastName: user.lastName,
            email: user.email,
            isAdmin: user.isAdmin,
          },
        });
    }
  } catch (err) {
    next(err);
  }
};

const loginUser = async (req, res, next) => {
  try {
    const { email, password, doNotLogout } = req.body;
    if (!(email && password)) {
      return res.status(400).send("All inputs are required");
    }

    const user = await User.findOne({ email }).orFail();
    if (user && comparePasswords(password,user.password)) {
      // to do: compare passwords
      let cookieParams = {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
      };

      if (doNotLogout) {
        cookieParams = { ...cookieParams, maxAge: 1000 * 60 * 60 * 24 * 7 }; // 1000=1ms
      }

      return res.cookie(
        "access_token",
        generateAuthToken(
          user._id,
          user.name,
          user.lastName,
          user.email,
          user.isAdmin
        ),
        cookieParams
      ).json({
          success: "user logged in",
          userLoggedIn: { _id: user._id, name: user.name, lastName: user.lastName, email: user.email, isAdmin: user.isAdmin, doNotLogout }
      });
    } else {
       return res.status(401).send("wrong credentials") 
    }
  } catch (err) 
  {
    next(err);
  }
};


const updateUserProfile=async(req,res,next)=>{
    try{

        const user=await User.findById(req.user._id).orFail();
        user.name=req.body.name || user.name
        user.lastName=req.body.name || user.lastName
        user.email= req.body.email || user.email
        user.phoneNumber=req.body.phoneNumber
        user.address=req.body.address
        user.country=req.user.country
        user.zipCode=req.user.zipCode
        user.city=req.user.city
        user.state=req.user.state

        if(req.body.password!==user.password){
            user.password=hashPassword(req.body.password)
        }
        await user.save()


        res.json({
            success:"user Updated",
            updatedUser:{
                _id:user.id,
                name:user.name,
                lastName:user.lastName,
                email:user.email,
                isAdmin:user.isAdmin

            }
        })
    }
    catch(error){
        next(error)
    }
}


const getUserProfile=async(req,res,next)=>{

    try{
        const user=await User.findById(req.params.id).orFail();
        return res.send(user)
    }
    catch(error){
        next(error)
    }
}

const reviewWriter=async(req,res,next)=>{

  try {
    
    const session=await Review.startSession()


    const { comment, rating } = req.body;
    
    if (!(comment && rating)) {
        return res.status(400).send("All inputs are required");
    }

    
    const ObjectId = require("mongodb").ObjectId;
    let reviewId = ObjectId();
    session.startTransaction()
    await Review.create([
        {
            _id: reviewId,
            comment: comment,
            rating: Number(rating),
            user: { _id: req.user._id, name: req.user.name + " " + req.user.lastName },
        }
    ],{session:session}
    )

    const product = await Product.findById(req.params.productId).populate("reviews");
    const alreadyReviewedOnce=product.reviews.find((r)=>r.user._id.toString()===req.user._id.toString())

    if(alreadyReviewedOnce){
      await session.abortTransaction()
      session.endSession()
      return res.status(400).send("Already reviewed once")
    }
    let prc = [...product.reviews];
    prc.push({ rating: rating });
    product.reviews.push(reviewId);
    if (product.reviews.length === 1) {
        product.rating = Number(rating);
        product.reviewsNumber = 1;
    } else {
        product.reviewsNumber = product.reviews.length;
        product.rating = prc.map((item) => Number(item.rating)).reduce((sum, item) => sum + item, 0) / product.reviews.length;
    }
    await product.save();
    await session.commitTransaction()
    session.endSession()
    res.send('review created')
} catch (err) {
    
    next(err)   
}
}



const findUser=async(req,res,next)=>{

  try{
    const user= await User.findById(req.params.id).select("name lastName email isAdmin").orFail()
    console.log(user)
    
    return res.send(user)
    
    
  }
  catch(error){
next(error)
  }
}


const updateUser=async(req,res,next)=>{

  try{
    const user=await User.findById(req.params.id).orFail()

    user.name= req.body.name ||user.name 
    user.lastName=req.body.lastName ||user.lastName 
    user.email=req.body.email||user.email
    user.isAdmin= req.body.isAdmin|| user.isAdmin 

    res.send("user updated")
    await user.save()
  }
  catch(error){
    next(error)
  }
}


const deleteUser=async(req,res,next)=>{

  try{
      const user=User.findById(req.params.id).orFail()
      if(user){
        await user.remove()
      }
      
      
      res.send("user deleted")
  }
  catch(error){
    res.status(400).send("User doesnt exist")
    next(error)
  }
}
module.exports = { reviewWriter, 
  getUsers, 
  registerUser, 
  loginUser,
  updateUserProfile, 
  getUserProfile,
  findUser,
  updateUser,
  deleteUser
};

