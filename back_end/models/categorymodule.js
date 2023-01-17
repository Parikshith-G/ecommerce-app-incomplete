const mongoose=require('mongoose');

const categorySchema=mongoose.Schema({

    name:{
        type:String,
        required:true,
        unique:true,

    },

    description:{
        type:String,
        default:"Default object description",
    },

    images:{
        type:String,
        default:"/images/others/monitors-category.png",
    },

    attrs:[
        {
            key:{type:String},
            value:[{type:String}],
        }
    ]
    


})

const Categories=mongoose.model("Categories",categorySchema);

module.exports=Categories;