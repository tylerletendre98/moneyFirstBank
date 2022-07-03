const express = require('express');
const User = require('../models/user')
const Account = require('../models/account');
const router = express.Router();
const Admin = require('../models/admin');
const Transaction = require('../models/transaction');
const config = require('config');

router.post('/newAccount/:userId', async(req,res)=>{
    try{
        const user = await User.findById(req.params.userId)
        const newAccount = new Account({
            primaryAccountHolder: user.fullName,
            isApproved: false,
            type:req.body.type
        })
        newAccount.save()
        const admin = await Admin.findById(config.get('AdminId'))
        user.accounts.push(newAccount)
        user.save()
        admin.accountsToBeApproved.push(newAccount)
        await admin.save()
        return res.send(user)
    }catch(ex){
        return res.status(500).send(`Internal Server Error ${ex}.`)
    }
})

router.put('/depositMoney/:userId/:accountId', async(req,res)=>{
    try {
        const user = await User.findById(req.params.userId)
        const account = await Account.findById(req.params.accountId)
        account.balance += parseInt(req.body.depositMoney)
        const newTransaction = new Transaction({
            accountOwner: user.fullName,
            transactionType:'Deposit',
            transactionAmount: req.body.depositMoney
        })
        newTransaction.save()
        account.transactions.push(newTransaction)
        account.save()
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

router.put('/withdrawMoney/:userId/:accountId', async(req,res)=>{
    try{
        const user = await User.findById(req.params.userId)
        const account = await Account.findById(req.params.accountId)
        if(account.balance > req.body.withdrawlMoney){
            account.balance -= parseInt(req.body.withdrawlMoney)
            const newTransaction = new Transaction({
                accountOwner: user.fullName,
                transactionType:'Withdrawl',
                transactionAmount: req.body.withdrawlMoney
            })
            newTransaction.save()
            account.transactions.push(newTransaction)
            account.save();
            for (let i = 0; i < user.accounts.length; i++) {
                if(String(user.accounts[i]._id) === String(account._id)){
                    user.accounts[i] = account
                    await user.save()
                    return res.send(user)
                }
            }
        }else{
            return res.status(400).send(`Not enough money in account`)
        }
    }catch(ex){
        return res.status(500).send(`Internal Server Error ${ex}.`)
    }

})

router.put('/transferFunds/:userId/:givingAccountId/:recieveingAccountId',async(req,res)=>{
    try{
        const user = await User.findById(req.params.userId)
        const givingAccount = await Account.findById(req.params.givingAccountId)
        const recieveingAccount = await Account.findById(req.params.recieveingAccountId)
        if(givingAccount.balance > req.body.transferingAmount){
            givingAccount.balance -= parseInt(req.body.transferingAmount)
            recieveingAccount.balance += parseInt(req.body.transferingAmount)
            const newTransaction = new Transaction({
                accountOwner: user.fullName,
                transactionType:'Funds Transfer',
                transactionAmount: req.body.transferingAmount
            })
            newTransaction.save()
            givingAccount.transactions.push(newTransaction)
            recieveingAccount.transactions.push(newTransaction)
            givingAccount.save()
            recieveingAccount.save()
            for (let i = 0; i < user.accounts.length; i++) {
                if(String(user.accounts[i]._id) === String(givingAccount._id)){
                    user.accounts[i] = givingAccount
                    await user.save()
                }
            }
            for (let i = 0; i < user.accounts.length; i++) {
                if(String(user.accounts[i]._id) === String(recieveingAccount._id)){
                    user.accounts[i] = recieveingAccount
                    await user.save()
                    return res.send(user)
                }
            }
        }
        
    }catch(ex){
        return res.status(500).send(`Internal Server Error ${ex}.`)
    }
})


module.exports = router;