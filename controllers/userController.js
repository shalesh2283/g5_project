const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../Models/userModel");

require("dotenv").config();

const registerUser = async function (req, res) {
  const data = req.body;

  if (await userModel.findOne({ email: data.email })) {
    return res.status(400).send("Some Error Occurred");
  } else {
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(data.password,salt, async function (err, hash) {
        await userModel.create({
          name: data.name,
          email: data.email,
          password: hash,
          role : data.role
        });

        return res.status(201).send("User Created Successfully");
      });
    });
  }
};

const logoutUser = (req,res) =>{
    res.cookie("token","");
    return res.status(201).send("Succesfull logged Out")
}

module.exports = { loginUser, registerUser,logoutUser};
