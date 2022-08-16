const express = require('express');
const User = require('../models/user');
const router = express.Router();
const Admin = require('../models/admin');
const config = require('config');



router.post('/newUser', async(req,res)=>{
    try{
        const admin = await Admin.findById(config.get('AdminId'))
        if (newUser) return res.status(400).send('User already registered.');
        const user = new User({
            isApproved: false,
            fullName:req.body.fullName,
            password: req.body.password,
            email:req.body.email,
            pin: req.body.pin,
            dateOfBirth:req.body.dateOfBirth,
            employed: req.body.employed,
            income: req.body.income,
            homeAddress:req.body.homeAddress,
        })
        await user.save()
        admin.usersToBeApproved.push(user)
        await admin.save()
        return res.send(user)
    }catch(ex){
        return res.status(500).send(`Internal Server Error ${ex}.`)
    }
});

router.put('/updateUser/:userId', async(req,res)=>{
    try {
        const user = await User.findByIdAndUpdate(req.params.userId,
            newInfo= {
                fullName:req.body.fullName,
                password: req.body.password,
                email:req.body.email,
                pin: req.body.pin,
                employed: req.body.employed,
                income: req.body.income,
                homeAddress:req.body.homeAddress,
            }
            );
            user.save()
        return res.send(user)
    } catch (ex) {
        return res.status(500).send(`Internal Server Error ${ex}.`)
    }
})

router.post('/loginUser', async(req,res)=>{
    try{
        const user = await User.findOne({email:req.body.email, password:req.body.password})
        if(user === null){
            return res.status(400).send(`Incorrect email or password please try again`)
        }else{
            return res.send(user)
        }
    }catch(ex){
        return res.status(500).send(`Internal Server Error ${ex}.`)
    }
})

router.get('/getUser/:userId',async(req,res)=>{
    try {
        const users = await User.findById(req.params.userId)
        return res.send(users)
    } catch (ex) {
        return res.status(500).send(`Internal Server Error ${ex}.`)
    }
})
module.exports = router;