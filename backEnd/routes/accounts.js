const express = require('express');
const User = require('../models/user')
const Account = require('../models/account');
const router = express.Router();
const Transaction = require('../models/transaction');

router.post('/newAccount/:userId', async(req,res)=>{
    try{
        const user = await User.findById(req.params.userId)
        const newAccount = new Account({
            type:req.body.type
        })
        newAccount.save()
        user.accounts.push(newAccount)
        await user.save()
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
            transactionType:'Deposit',
            transactionAmount: req.body.depositMoney
        })
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
                transactionType:'Withdrawl',
                transactionAmount: req.body.withdrawlMoney
            })
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


module.exports = router;