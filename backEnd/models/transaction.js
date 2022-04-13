const mongoose = require('mongoose');
const Account = require('../models/account')

const transactionSchema = new mongoose.Schema({ 
    recievingAccount:{type:[Account.schema]},
    withdrawingAccount:{type:[Account.schema]},
    transactionAmount:{type:Number, required:true},
    transactionDate:{type:Date, default:Date.now}
})

module.exports = mongoose.model('Transaction', transactionSchema)