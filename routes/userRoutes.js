const express = require("express");
const { registerUser, loginUser } = require("../controllers/userController");

const router = express.Router();

router.use(function (req,res,next){    
    console.log("THIS IS ROUTER LVELV MIDDLEWARE");
    next()

})

router.post("/register", registerUser);

router.post("/login", loginUser)



module.exports = router;