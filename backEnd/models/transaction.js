const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({ 
    transactionAmount:{type:Number, required:true},
    transactionDate:{type:Date, default:Date.now}
})

module.exports = mongoose.model('Transaction', transactionSchema)