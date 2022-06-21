const express = require('express');
const router = express.Router();
const Admin = require('../models/admin')

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
        const admin = await Admin.find()
        return res.send(admin)
    }catch(ex){
        return res.status(500).send(`Internal Server Error ${ex}.`)
    }
})

module.exports = router;