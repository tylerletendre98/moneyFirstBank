const mongoose = require('mongoose')

const loanSchema = new mongoose.Schema({
    loanOwner:{type:String, required:true},
    downPayment:{type:Number, default:0},
    amount:{type:Number, required:true},
    termLength:{type:Number, required:true},
    type:{type:String, required:true},
    monthlyPayment:{type:Number, required:true},
    paymentsRemaining:{type:Number, required:true},
    requestersMonthlyIncome:{type:Number, required:true},
    isApproved:{type:Boolean, required:true},
    transactions:{type:Array, default:[]}
})

module.exports = mongoose.model('Loan', loanSchema);