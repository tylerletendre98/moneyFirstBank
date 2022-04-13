const express = require('express');
const User = require('../models/user')
const Account = require('../models/account');
const { type } = require('express/lib/response');
const router = express.Router();

router.post('/newAccount/:userId', async(req,res)=>{
    try{
        const user = await User.findById(req.params.userId)
        const newAccount = new Account({
            type:req.body.type
        })
        newAccount.save()
        user.accounts.push(newAccount)
        user.save()
        return res.send(user)
    }catch(ex){
        return res.status(500).send(`Internal Server Error ${ex}.`)
    }
})

router.post('/depositMoney/:accountId/:userId', async(req,res)=>{
    try{
        const user = await User.findById(req.params.userId)
        const account = await Account.findById(req.params.accountId)
        const depositMoney = req.body.depositMoney
        for (let i = 0; i < user.accounts.length; i++) {
            if(String(user.accounts[i]._id) === String(account._id)){
                user.accounts[i].balance += depositMoney
                user.save()
                return res.send(user)
            }
        }
    }catch(ex){
        return res.status(500).send(`Internal Server Error ${ex}.`)
    }

})

router.post('/withdrawMoney/:accountId/:userId', async(req,res)=>{
    try{
        const user = await User.findById(req.params.userId)
        const account = await Account.findById(req.params.accountId)
        const withdrawnMoney = req.body.withdrawnMoney
        for (let i = 0; i < user.accounts.length; i++) {
            if(String(user.accounts[i]._id) === String(account._id)){
                if(withdrawnMoney >= user.accounts[i].balance){
                    return res.status(201).send('Not enough money in account')
                }else{
                    user.accounts[i].balance -= withdrawnMoney
                    user.save()
                    return res.send(user)
                }
            }
        }
    }catch(ex){
        return res.status(500).send(`Internal Server Error ${ex}.`)
    }

})


module.exports = router;