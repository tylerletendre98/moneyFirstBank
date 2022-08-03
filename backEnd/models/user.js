const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    isApproved:{type:Boolean},
    fullName:{type:String, required:true},
    email:{type:String, required:true},
    password:{type:String, required:true},
    pin:{type:String, required:true},
    accounts:{type:Array, default:[]},
});


module.exports = mongoose.model("User", userSchema)