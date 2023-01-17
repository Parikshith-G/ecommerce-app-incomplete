const Product=require('../models/ProductModule');
const recordsPerPage=require('../config/pagenation');
const imageValidate=require("../utils/imageValidator")

const getProducts=async(req,res,next)=>{
    try{
        
        

        let query={};
        let ifqueryisthere=false;
        
        

        let querybyprice={}
        if(req.query.price){
            ifqueryisthere=true;
            querybyprice={price:{$lte: Number(req.query.price)}};
        }

        let querybyrating={}
        if(req.query.rating){
            ifqueryisthere=true;
            querybyrating={rating:{$in:req.query.rating.split(",")}}
        }

        let querybycategory={}
        const categoryName= req.params.categoryName || ""
        if(categoryName){
            ifqueryisthere=true;
            let a=categoryName.replaceAll(",","/")
            let regEX=new RegExp("^"+a);
            querybycategory={category:regEX}
        }

        if(req.query.category){
            ifqueryisthere=true;
            let a=req.query.category.split(",").map((item)=>{
                if(item){
                    return new RegExp("^"+item)
                }
                querybycategory={
                    $in:a,
                }
            })
        }


        let querybyattribute=[]

        if(req.query.attrs){

                querybyattribute=req.query.attrs.split(",").reduce((acc,item)=>{
                if(item){
                    let a=item.split('-')
                    let values=[...a]
                    values.shift()
                    
                    let a1={
                        attrs:{$elemMatch:{key:a[0],value:{$in:values}}},}
                    acc.push(a1)
                    return acc
                }
                else{
                    return acc
                }
                
            },[])
            ifqueryisthere=true;
        }
       
        // console.dir(querybyattribute,{depth:null})

        let sort={}
        const sortOption=req.query.sort || "";
        if(sortOption){
            let sortOpt=sortOption.split("_");
            sort={[sortOpt[0]]:Number(sortOpt[1])};
            // console.log(sort)
        }
        const pageNum=Number(req.query.pageNum) || 1

        const searchQuery=req.params.searchQuery || ""
        let querybysearch={}
        let select={}
        if(searchQuery){
            ifqueryisthere=true;
            querybysearch={
                $text:{
                    $search:searchQuery,
                }
            }
            select={
                score:{
                    $meta:"textScore"
                }
                
            }
            sort={score:{$meta:"textScore"}}
        }
        
        
        

        if(ifqueryisthere){
            query={
               $and:[  
                    querybyprice,
                    querybyrating,
                    querybycategory,
                    querybysearch   ,
                    ...querybyattribute,
                     
                ]
            }
        }


        
        const totalProducts=await Product.countDocuments(query)
        const products=await Product
                            .find(query)
                            .select(select)
                            .sort(sort)
                            .limit(recordsPerPage)
                            .skip((recordsPerPage)*(pageNum-1));
        res.json({
            products,
            pageNum,
            pagenationLinkNumber:Math.ceil(totalProducts/recordsPerPage)
        })
    }
    catch(error){
        next(error);
    }



}


const getProductById=async(req,res,next)=>{
    try{

        const product=await Product.findById(req.params.id).populate("reviews")
        res.json(product)
    }

    catch(error){
        next(error)
    }

}
const getBestsellers = async (req, res, next) => {
    try {
        const products = await Product.aggregate([
            { $sort: { category: 1, sales: -1 } },
            { $group: { _id: "$category", doc_with_max_sales: { $first: "$$ROOT" } } },
            { $replaceWith: "$doc_with_max_sales" },
            { $match: { sales: { $gt: 0 } } },
            { $project: { _id: 1, name: 1, images: 1, category: 1, description: 1 } },
            { $limit: 3 }
        ])
        res.json(products)
    } catch(err) {
        next(err)
    }
}


    const adminGetProducts=async(req,res,next)=>{

        try{
            const products=await Product.find({}).sort({category:1}).select('name price category')
            res.json(products)

        }

        catch(error){
            next(error)
        }


}


const adminRemoveProducts=async(req,res,next)=>{

    try{

        const product=Product.findById(req.params.id).orFail()

        await product.remove()

        res.json({message:"Product removed"})

    }
    catch(error){
        next(error)
    }

}


const adminCreateProducts=async(req,res,next)=>{
    try{
        const product=new Product();
        console.log(req.body)
        const {name,price,description,count,category,attributeTable}=req.body;

        product.name=name
        product.price=price
        product.description=description
        product.count=count
        product.category=category

        if(attributeTable.length > 0){
            attributeTable.map((item)=>{
                product.attrs.push(item)
            })

        }
        await product.save();
        res.json({
            message:"Product added",
            productId:product._id
        })
        // console.log({
        //     message:"Product added",
        //     productId:product._id
        // })
    }
    catch(error){
        next(error)
    }
}


const adminProductUpdate=async(req,res,next)=>{

    try{
        const product=await Product.findById(req.params.id).orFail();
        const {name,price,description,count,category,attributeTable}=req.body;

        product.name=name || product.name
        product.price=price ||product.price
        product.description=description ||product.description
        product.count=count || product.count
        product.category=category || product.category


        if(attributeTable.length > 0 ) {
            product.attrs=[]

            attributeTable.map((item)=>{
                product.attrs.push(item)
            })
        }

        await product.save();
        res.json({
            message:"Product updated"
        })
    }
    catch(error){
        next(error)
    }
}

const adminFileUpload = async (req, res, next) => {
    try {
        if(!req.files || !! req.files.images === false) {
            return res.status(400).send("No files were uploaded.")
        }

        const validateResult = imageValidate(req.files.images)
        if(validateResult.error) {
            return res.status(400).send(validateResult.error)
        }

        const path = require("path")
        const { v4: uuidv4 } = require("uuid")
        const uploadDirectory = path.resolve(__dirname, "../../front_end", "public", "images", "products")
        var product=await Product.findById(req.query.productId).orFail()
        let imagesTable = []
        if (Array.isArray(req.files.images)) {
            imagesTable = req.files.images
        } else {
            imagesTable.push(req.files.images)
        }

        for(let image of imagesTable) {
            
            var fileName=uuidv4() + path.extname(image.name)
            var uploadPath = uploadDirectory + "/"+fileName
            product.images.push({path:'/images/products'+fileName})

            image.mv(uploadPath, function(err) {
                if(err) {
                    return res.status(500).send(err);
                }
            })
        }
        await product.save();
        return res.send("Files uploaded!");

    } catch(err) {
        next(err)
    }
}

const adminDeleteImage=async(req,res,next)=>{

    try {
        const imagePath = decodeURIComponent(req.params.imagePath);
        const path = require("path");
        const finalPath = path.resolve("../front_end/public/images/products")
    
        const fs = require("fs");
        fs.unlink(finalPath, (err) => {
          if (err) {
            res.status(500).send("hereh "+err);
          }
        });
        await Product.findOneAndUpdate(
          { _id: req.params.productId },
          { $pull: { images: { path: imagePath } } }
        ).orFail();
        return res.end();
      } catch (err) {
        next(err);
      }

}


module.exports={getProducts,
    getProductById,
    getBestsellers,
    adminGetProducts,
    adminRemoveProducts,
    adminCreateProducts,
    adminProductUpdate,
    adminFileUpload,
    adminDeleteImage
};
