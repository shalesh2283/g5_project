const express = require("express");
const { addProfileDetails, getProfileDetails, updateProfileDetails } = require("../controllers/profileController");
const { authMiddleware } = require("../middlewares/authMiddleware");


const router = express.Router();

router.get("/", getProfileDetails)
router.post("/",authMiddleware,addProfileDetails)
router.put("/",authMiddleware,updateProfileDetails)







module.exports = router;