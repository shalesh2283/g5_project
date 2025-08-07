
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");



const generateToken = (userId) =>{
    return jwt.sign({userId}, process.env.JWT_SECRET_KEY);

}

const registerUser = async (req,res) =>{
    const { firstName, lastName, emailId, password} = req.body;

    //VALIDATION

    if (!firstName || !emailId || !password){
        return res.status(400).send({message:"Please Add all mandatory fields"});
    }

    //Check the user existing already in db or not
    const userExists = await User.findOne({emailId});
    if (userExists){
        return res.status(400).json({message: "Already Exist"});
    }

    //CREATE USER IN YOUR DATABASE

    const newUser = await User.create({
        firstName,
        lastName,
        emailId,
        password
    });

    await newUser.save();

    const tokenGen = generateToken(newUser._id)
    console.log(tokenGen);
    
    return res.status(201).json("USER CREATED",tokenGen);
    
}


const loginUser = async (req,res) => {
     const { emailId, password} = req.body;

     //Validation:

     if (!emailId || !password){
        return res.status(400).send("Please Fill All the Details");
     }

     const userExists = await User.findOne({emailId});
     
     if(!userExists){
        return res.status(400).send("User not found !!")
     }
     res.status(200).json({userExists});
}

module.exports = { registerUser, loginUser }
