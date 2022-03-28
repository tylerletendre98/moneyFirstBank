const express = require('express');
const User = require('../models/user');
const router = express.Router();


router.post('/newUser', async(req,res)=>{
    try{
        const user = new User({
            fullName:req.body.fullName,
            password:req.body.password,
            email:req.body.email,
        })
        await user.save();
        return res.send(user)
    }catch(ex){
        return res.status(500).send(`Internal Server Error ${ex}.`)
    }
});


module.exports = router;