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

const autoDeclineLoan = (loan,admin, user, res)=>{
    if(loan.requestersMonthlyIncome > 3*loan.monthlyPayment){
        addLoanToAmdmin(admin, loan);
        addLoanToUser(user,loan);
        return res.send(loan)
    }else{
        return res.status(400).send(`Loan ${loan._id} was declined due to not enough monthly income`)
    }
}

router.post('/newLoanRequest/:requesterId', async(req,res)=>{
    try {
        const user = await User.findById(req.params.requesterId)
        const admin = await Admin.findById(config.get('AdminId'))
        const newLoan = new Loan({
            loanOwner: user.fullName,
            downPayment:req.body.downPayment,
            amount:(req.body.amount - req.body.downPayment),
            termLength:req.body.termLength,
            type: req.body.type,
            monthlyPayment:(req.body.amount / req.body.termLength),
            paymentsRemaining: req.body.termLength,
            requestersMonthlyIncome: req.body.requestersMonthlyIncome,
            isApproved: false,
        })
        newLoan.save()
        autoDeclineLoan(newLoan,admin,user,res);
    } catch (ex) {
        return res.status(500).send(`Internal Server Error ${ex}.`)
    }
})

module.exports = router