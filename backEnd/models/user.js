const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    isApproved:{type:Boolean},
    fullName:{type:String, required:true},
    email:{type:String, required:true},
    dateOfBirth:{type: Date, required:true},
    password:{type:String, required:true},
    pin:{type:String, required:true},
    accounts:{type:Array, default:[]},
    activeLoans:{type:Array,default:[]},
    employed:{type:Boolean, required: true},
    income:{type:Number, default:0},
    homeAddress:{type:String, required:true}
});


module.exports = mongoose.model("User", userSchema)