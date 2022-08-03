const express = require('express');
const User = require('../models/user');
const router = express.Router();
const Admin = require('../models/admin');
const config = require('config');



router.post('/newUser', async(req,res)=>{
    try{
        let newUser = await User.findOne({ email: req.body.email });
        if (newUser) return res.status(400).send('User already registered.');
        const user = new User({
            isApproved: false,
            fullName:req.body.fullName,
            password: req.body.password,
            email:req.body.email,
            pin: req.body.pin 
        })
        const admin = await Admin.findById(config.get('AdminId'))
        admin.usersToBeApproved.push(user)
        await admin.save()
        await user.save();
        return res.send(user)
    }catch(ex){
        return res.status(500).send(`Internal Server Error ${ex}.`)
    }
});

router.post('/loginUser', async(req,res)=>{
    try{
        const user = await User.findOne({email:req.body.email, password:req.body.password})
        if(user === null){
            return res.status(400).send('User does not exist')
        }else{
            return res.send(user)
        }
    }catch(ex){
        return res.status(500).send(`Internal Server Error ${ex}.`)
    }
})

router.get('/getUser/:userId',async(req,res)=>{
    try{
        const user = await User.findById(req.params.userId)
        return res.send(user)
    }catch(ex){
        return res.status(500).send(`Internal Server Error ${ex}.`)
    }
})

router.post('/getUser',async(req,res)=>{
    try {
        const user = await User.findOne({fullName:req.body.fullName})
        console.log(user)
    } catch (ex) {
        
    }
})

router.get('/getUsers',async(req,res)=>{
    try {
        const users = await User.find()
        return res.send(users)
    } catch (ex) {
        return res.status(500).send(`Internal Server Error ${ex}.`)
    }
})
module.exports = router;