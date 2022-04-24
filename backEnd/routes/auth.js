const bcrypt = require('bcrypt');
const express = require('express');
const {User} = require('../models/user');
const config = require('config');
const jwt = require('jsonwebtoken');
const router = express.Router();

router.post('/login', async(req,res)=>{
    try {
        const user = await User.findOne({email:req.body.email});
        if(!user) return res.status(400).send('Invaild Email or password');

        const validPassword = await bcrypt.compare(req.body.validPassword, user.password);
        if(!validPassword) return res.status(400).send('Invalid email or password');
        
        const token = jwt.sign({_id: user._id,name: user.name}, config.get('jwtSecret'));

        return res.send(token)
    } catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
})