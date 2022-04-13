const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
    type:{type:String, required:true},
    balance:{type:Number, default:0},
    transactions:{type:Array, default:[]}
})

module.exports = mongoose.model('Account', accountSchema);