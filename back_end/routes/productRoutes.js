const express=require('express')
const router=express.Router()
const {authTokenforlogin, isAdmin}=require('../middlewares/authToken')
const {
    getProducts,
    getProductById,
    getBestsellers,
    adminGetProducts,
    adminRemoveProducts,
    adminCreateProducts,
    adminProductUpdate,
    adminFileUpload,
    adminDeleteImage}=require('../controllers/productcontroller')


router.get('/search/:searchQuery',getProducts)
router.get('/category/:categoryName/search/:searchQuery',getProducts)
router.get('/category/:categoryName',getProducts)
router.get('/',getProducts)
router.get("/bestsellers",getBestsellers)
router.get("/get-one/:id",getProductById)


// this is admin routes

router.use(authTokenforlogin,isAdmin)
// router.use(isAdmin) both can be done|^
router.get('/admin',adminGetProducts)
router.delete('/admin/:id',adminRemoveProducts)
router.put('/admin/:id',adminProductUpdate)
router.post("/admin/upload",adminFileUpload)
router.post('/admin',adminCreateProducts)
router.delete('/admin/image/:imagepath/:productId',adminDeleteImage)
module.exports=router;