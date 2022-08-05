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

const checkForAutoDecline=(loan,admin, user, res)=>{
    if(user.employed === false){
        return res.status(400).send(`Loan ${loan._id} was declined due employment status`)
    }else if(loan.requestersMonthlyIncome < 2*loan.monthlyPayment){
        return res.status(400).send(`Loan ${loan._id} was declined due to not enough monthly income`)
    }else{
        addLoanToAmdmin(admin, loan);
        addLoanToUser(user,loan);
        return res.send(loan);
    }
}

const calculateMonthlyPayment =(loan)=>{
    const requestedAmountPlusInterest = (loan.requestedAmount * loan.interestRate * (loan.termLength / 12))
    totalCostOfLoan = (requestedAmountPlusInterest + loan.requestedAmount) - loan.downPayment
    const monthlyPayment = totalCostOfLoan / loan.termLength
    return monthlyPayment
}

router.post('/newLoanRequest/:requesterId', async(req,res)=>{
    try {
        const user = await User.findById(req.params.requesterId)
        const admin = await Admin.findById(config.get('AdminId'))
        const newLoan = new Loan({
            loanOwner: user.fullName,
            downPayment:req.body.downPayment,
            requestedAmount:req.body.requestedAmount,
            termLength:req.body.termLength,
            type: req.body.type,
            remainingBalance: undefined,
            monthlyPayment: undefined,
            paymentsRemaining: req.body.termLength,
            requestersMonthlyIncome: (user.income/12),
            interestRate:req.body.interestRate,
            isApproved: false,
        })
        newLoan.monthlyPayment = calculateMonthlyPayment(newLoan)
        Math.round(newLoan.monthlyPayment)
        newLoan.remainingBalance = newLoan.monthlyPayment * newLoan.termLength
        newLoan.save()
        autoDeclineLoan(newLoan,admin,user,res);
        checkForAutoDecline(newLoan,admin,user,res)
    } catch (ex) {
        return res.status(500).send(`Internal Server Error ${ex}.`)
    }
})

module.exports = router