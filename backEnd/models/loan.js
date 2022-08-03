const mongoose = require('mongoose')

const loanSchema = new mongoose.Schema({
    amount:{type:Number, required:true},
    termLength:{type:Number, required:true},
    type:{type:String, required:true},
    isApproved:{type:Boolean, required:true}, 
})

module.exports = mongoose.model('Loan', loanSchema);