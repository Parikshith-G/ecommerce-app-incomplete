const express=require('express');

const router=express.Router()
const {authTokenforlogin,isAdmin}=require("../middlewares/authToken");




const {getUserOrders, getOrder, createOrder, updateOrderToPaid, updateOrderToDelivered, getOrders, getOrderForAnalysis} = require("../controllers/orderController")



// user routes
router.use(authTokenforlogin)
router.get("/", getUserOrders)
router.get("/user/:id", getOrder);
router.post("/", createOrder);
router.put("/paid/:id", updateOrderToPaid);

// admin routes
router.use(isAdmin)
router.put("/delivered/:id", updateOrderToDelivered);
router.get("/admin", getOrders);
router.get("/analysis/:date", getOrderForAnalysis);

module.exports = router
