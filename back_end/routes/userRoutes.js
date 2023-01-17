const express = require('express')
const router = express.Router()
const {getUsers, registerUser, getUserProfile, loginUser, updateUserProfile, reviewWriter, findUser, updateUser, deleteUser} = require("../controllers/userController")
const { authTokenforlogin, isAdmin } = require('../middlewares/authToken')

router.post("/register", registerUser)
router.post("/login", loginUser)


router.use(authTokenforlogin)

router.post("/profile",updateUserProfile)
router.get("/profile/:id",getUserProfile)
router.post("/review/:productId",reviewWriter)

// user logged in routes:

// admin routes:
router.use(isAdmin)
router.get("/", getUsers)
router.get("/:id",findUser)
router.put("/:id",updateUser)
router.delete("/:id",deleteUser)

module.exports = router
