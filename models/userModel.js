const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    "name" : {type : String, required : true},
    "email" : {type : String, required : true, unique : true},
    "password" : {type : String, required : true},
    "role" : {type : String, required : true, enum : ["Teaching Assistant","Student"]}
})

module.exports = mongoose.model("user",userSchema);