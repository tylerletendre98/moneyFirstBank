const express = require('express');
const User = require('../models/user');
const bcrypt = require('bcrypt')
const router = express.Router();


router.post('/newUser', async(req,res)=>{
    try{

        let newUser = await User.findOne({ email: req.body.email });
        if (newUser) return res.status(400).send('User already registered.');

        const salt = await bcrypt.genSalt(10);
        const user = new User({
            fullName:req.body.fullName,
            password: await bcrypt.hash(req.body.password, salt),
            email:req.body.email,
        })
        await user.save();
        return res.send(user)
    }catch(ex){
        return res.status(500).send(`Internal Server Error ${ex}.`)
    }
});

router.get('/getUser/:userId',async(req,res)=>{
    try{
        const user = await User.findById(req.params.userId)
        return res.send(user)
    }catch(ex){
        return res.status(500).send(`Internal Server Error ${ex}.`)
    }
})
module.exports = router;