const express = require('express');
const User = require('../models/user')
const Account = require('../models/account')
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

module.exports = router;