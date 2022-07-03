const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    accountOwner:{type:String, required: true},
    transactionType:{type:String, required: true},
    transactionAmount:{type:Number, required:true},
    transactionDate:{type:Date, default:Date.now}
})

module.exports = mongoose.model('Transaction', transactionSchema)