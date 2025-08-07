const mongoose = require("mongoose");

const { Schema }=  mongoose;

const UserSchema = new Schema({
    firstName: { type: String, required: true},
    lastName: { type: String},
    emailId: { type: String, unique: true,required: true},
    password: { type: String, required: true},
},{
    timestamps: true
})

module.exports = mongoose.model("User",UserSchema);