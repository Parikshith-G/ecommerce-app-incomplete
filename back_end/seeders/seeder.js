const connectDB=require('../config/db');
connectDB();

const categoryData=require('./category');
const Category=require('../models/categorymodule');

const productData=require('./product');
const Product=require('../models/ProductModule');

const reviewsData=require('./reviews');
const Reviews=require('../models/reviewmodule');

const usersData=require('./users');
const Users=require('../models/usermodule');

const orderData=require('./orders');
const Order=require('../models/ordermodule');

const importData=async()=>{
    try{
        await Category.collection.dropIndexes()
        await Category.collection.deleteMany({});
        await Category.insertMany(categoryData);

        await Product.collection.dropIndexes()
        await Product.collection.deleteMany({});
        

        await Reviews.collection.dropIndexes()
        await Reviews.collection.deleteMany({});
        const reviews=await Reviews.insertMany(reviewsData);
        const sampleProducts=productData.map((product)=>{
            reviews.map((review)=>{
                product.reviews.push(review._id)
            })
            return {...product}
        });
        await Product.insertMany(sampleProducts);


        await Users.collection.deleteMany({})
        await Users.collection.insertMany(usersData)

        await Order.collection.deleteMany({})
        await Order.collection.insertMany(orderData)

        console.log("Successfully put data in database");
        process.exit();
    }
    catch(error){
        console.error("error in  depostiing data "+error);
        process.exit(1);
    }
}
importData()