const express=require('express')
const router=express.Router()

const {getCategory,newCategory,deleteCategory,saveAttribute}=require('../controllers/categoryController')
const { isAdmin,  authTokenforlogin } = require('../middlewares/authToken')


router.get('/',getCategory)
router.use(isAdmin,authTokenforlogin) //qwertyuiop
router.post('/',newCategory)
router.delete('/:category',deleteCategory)
router.post('/attr',saveAttribute)
module.exports=router;