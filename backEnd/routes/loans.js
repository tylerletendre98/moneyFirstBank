const express = require('express');
const router = express.Router();
const Loan = require('../models/loan')
const Transaction = require('../models/transaction')
const Admin = require('../models/admin');
const User = require('../models/user');
const config = require('config')

const addLoanToAmdmin =(admin, newLoan) =>{
    admin.loansToBeApproved.push(newLoan);
    admin.save()
}

const addLoanToUser = (user, newLoan)=>{
    user.activeLoans.push(newLoan)
    user.save()
}

router.post('/newLoanRequest/:requesterId', async(req,res)=>{
    try {
        const user = await User.findById(req.params.requesterId)
        const admin = await Admin.findById(config.get('AdminId'))
        const newLoan = new Loan({
            loanOwner:req.body.loanOwner,
            downPayment:req.body.downPayment,
            amount:(req.body.amount - req.body.downPayment),
            termLength:req.body.termLength,
            type: req.body.type,
            monthlyPayment:(req.body.amount / req.body.termLength),
            paymentsRemaining: req.body.termLength,
            requestersEstMonthlyIncome: req.body.requestersEstMonthlyIncome,
            isApproved: false,
        })
        addLoanToAmdmin(admin, newLoan);
        addLoanToUser(user,newLoan);
        return res.send(newLoan)
    } catch (ex) {
        return res.status(500).send(`Internal Server Error ${ex}.`)
    }
})

module.exports = router