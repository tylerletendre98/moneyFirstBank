const express = require('express');
const router = express.Router();
const Admin = require('../models/admin')
const config = require('config');
const User = require('../models/user');

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
        admin.usersToBeApproved = admin.usersToBeApproved.filter((users)=> users === user)
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
        admin.usersToBeApproved = admin.usersToBeApproved.filter((users)=> users === user)
        admin.save()
        return res.send(admin)
    } catch (ex) {
        return res.status(500).send(`Internal Server Error ${ex}.`)
    }
})

module.exports = router;