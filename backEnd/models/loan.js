const mongoose = require('mongoose')

const loanSchema = new mongoose.Schema({
    loanOwner:{type:String, required:true},
    downPayment:{type:Number, default:0},
    remainingBalance:{type:Number},
    requestedAmount:{type:Number, required:true},
    termLength:{type:Number, required:true},
    type:{type:String, required:true},
    monthlyPayment:{type:Number},
    requestersMonthlyIncome:{type:Number, required:true},
    loanStatus:{type:String, required:true}, 
    transactions:{type:Array, default:[]},
    interestRate:{type:Number}
})

module.exports = mongoose.model('Loan', loanSchema);