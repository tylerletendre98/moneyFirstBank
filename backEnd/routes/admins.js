const express = require('express');
const router = express.Router();
const Admin = require('../models/admin')
const config = require('config');
const User = require('../models/user');
const Account = require('../models/account')
router.post('/newAdmin', async(req,res)=>{
    try{
        const admin = new Admin({
            email: req.body.email,
            password: req.body.password
        })
        await admin.save()
        return res.send(admin)
    }catch(ex){
        return res.status(500).send(`Internal Server Error ${ex}.`)
    }
})

router.post('/loginAdmin', async(req,res)=>{
    try {
        const admin = await Admin.findOne({email:req.body.email,password:req.body.password})
        console.log(admin)
        return res.send(admin)
    } catch (ex) {
        return res.status(500).send(`Internal Server Error ${ex}.`)
    }
})

router.get('/getAdmin', async(req,res)=>{
    try{
        const admin = await Admin.findById(config.get('AdminId'))
        return res.send(admin)
    }catch(ex){
        return res.status(500).send(`Internal Server Error ${ex}.`)
    }
})

router.put('/approveUser/:userId', async(req,res)=>{
    try {
        const admin = await Admin.findById(config.get('AdminId'))
        const user = await User.findById(req.params.userId)
        user.isApproved = true
        user.save()
        admin.usersToBeApproved = admin.usersToBeApproved.filter(users=> String(users._id) !== String(user._id))
        admin.save()
        return res.send(admin)

    } catch (ex) {
        return res.status(500).send(`Internal Server Error ${ex}.`)
    }
})

router.put('/denyUser/:userId', async(req,res)=>{
    try {
        const admin = await Admin.findById(config.get('AdminId'))
        const user = await User.findById(req.params.userId)
        admin.usersToBeApproved = admin.usersToBeApproved.filter(users=> String(users._id) !== String(user._id))
        admin.save()
        return res.send(admin)
    } catch (ex) {
        return res.status(500).send(`Internal Server Error ${ex}.`)
    }
})

router.put('/approveAccount/:accountId', async(req,res)=>{
    try {
        const admin = await Admin.findById(config.get('AdminId'))
        const account = await Account.findById(req.params.accountId)
        const user = await User.findOne({fullName:account.primaryAccountHolder})
        console.log(user)
        account.isApproved = true
        account.save()
        for (let i = 0; i < user.accounts.length; i++) {
            if(String(user.accounts[i]._id) === String(account._id)){
                user.accounts[i] = account
                console.log('approved')
                await user.save()
                admin.accountsToBeApproved = admin.accountsToBeApproved.filter(accounts => String(accounts._id) !== String(account._id))
                admin.save()
                return res.send(admin)
            }
        }
    } catch (ex) {
        return res.status(500).send(`Internal Server Error ${ex}.`)
    }
})

router.put('/denyAccount/:accountId', async(req,res)=>{
    try {
        const admin = await Admin.findById(config.get('AdminId'))
        const account = await Account.findById(req.params.accountId)
        const user = await User.findOne({fullName:account.primaryAccountHolder})
        user.accounts = user.accounts.filter((accounts)=> accounts === account)
        await user.save()
        admin.accountsToBeApproved = admin.accountsToBeApproved.filter(accounts => String(accounts._id) !== String(account._id))
        await admin.save()
        return res.send(admin);
    } catch (ex) {
        return res.status(500).send(`Internal Server Error ${ex}.`)
    }
})

module.exports = router;