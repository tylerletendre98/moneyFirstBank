const express = require('express');
const router = express.Router();
const Loan = require('../models/loan')
const Transaction = require('../models/transaction')
const Admin = require('../models/admin');
const User = require('../models/user');
const config = require('config');
const Account = require('../models/account');

const addLoanToAmdmin =(admin, newLoan) =>{
    admin.loansToBeApproved.push(newLoan);
    admin.save()
}

const addLoanToUser = (user, newLoan)=>{
    user.activeLoans.push(newLoan)
    user.save()
}

const checkRemainingBalance = (currentBalance, loanPayment)=>{
      if(currentBalance - loanPayment >= 0 ){
        return "closed"
      }else return "approved" 
}

const subtractLoanPayment =(account, loanPayment)=>{
    newAccountBalance = account.balance - loanPayment
    return newAccountBalance
}

const checkForAutoDecline=(loan,admin, user, res)=>{
    if(user.employed === false){
        return res.status(400).send(`Loan ${loan._id} was declined due employment status`)
    }else if(loan.requestersMonthlyIncome < 2*loan.monthlyPayment){
        return res.status(400).send(`Loan ${loan._id} was declined due to not enough monthly income`)
    }else{
        addLoanToAmdmin(admin, loan);
        addLoanToUser(user,loan);
        return res.send(user);
    }
}

const updateAccount = (account, loanPayment, user)=>{
    if(loanPayment < account.balance ){
        account.balance -= loanPayment
        const firstTransaction = new Transaction({
            accountOwner:user.fullName,
            transactionType:'Loan Payment',
            transactionAmount:loanPayment,
        })
        account.transactions.push(firstTransaction)
        account.save()
    }else{
        return res.status(400).send('Not enough money in account')
    }
}   

const calculateInterestRate = (loanType)=>{
    if(loanType === "Auto"){
        const interestRate = 0.045
        return interestRate
    }else if(loanType === "Mortgage"){
        const interestRate = 0.035
        return interestRate
    }else if(loanType === "Personal"){
        const interestRate = 0.13
        return interestRate
    }
}

const updateLoan = (loan, loanPayment, user)=>{
        if(loan.remainingBalance - loanPayment === 0){
            loan.remainingBalance -= loanPayment
            const newTransaction = new Transaction({
                accountOwner:user.fullName,
                transactionType:'Loan Payment',
                transactionAmount: loanPayment,
            })
            loan.transactions.push(newTransaction)
            loan.loanStatus = "closed"
            loan.save()
        }else{
            loan.remainingBalance -= loanPayment
            const newTransaction = new Transaction({
                accountOwner:user.fullName,
                transactionType:'Loan Payment',
                transactionAmount: loanPayment,
            })
            loan.transactions.push(newTransaction)
            loan.save()
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
            type:req.body.type,
            remainingBalance: undefined,
            monthlyPayment: undefined,
            requestersMonthlyIncome: (user.income/12),
            loanStatus:"pending approval"
        })
        newLoan.interestRate = calculateInterestRate(newLoan.type)
        newLoan.monthlyPayment = calculateMonthlyPayment(newLoan)
        newLoan.monthlyPayment = Math.round(newLoan.monthlyPayment)
        newLoan.remainingBalance = newLoan.monthlyPayment * newLoan.termLength
        newLoan.save()
        checkForAutoDecline(newLoan,admin,user,res)
    } catch (ex) {
        return res.status(500).send(`Internal Server Error ${ex}.`)
    }
})

router.put(`/makeLoanPayment/:userId/:accountId/:loanId`, async(req,res)=>{
    try {
        const user = await User.findById(req.params.userId)
        const loan = await Loan.findById(req.params.loanId)
        const account = await Account.findById(req.params.accountId)
        if(account.balance < req.body.loanPayment){
            return res.status(400).send(`Not enough money in account ${account._id}`)
        }
        updateAccount(account, req.body.loanPayment, user)
        updateLoan(loan,req.body.loanPayment, user)
        for (let i = 0; i < user.activeLoans.length; i++) {
            if(String(user.activeLoans[i]._id) === String(loan._id)){
                user.activeLoans[i] = loan
                await user.save()
            }
        }
        for (let i = 0; i < user.accounts.length; i++) {
            if(String(user.accounts[i]._id) === String(account._id)){
                user.accounts[i] = account
                await user.save()
                return res.send(user)
            }
        }       
    } catch (ex) {
        return res.status(500).send(`Internal Server Error ${ex}.`)
    }
})

module.exports = router