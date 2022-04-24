const bcrypt = require('bcrypt');
const express = require('express');
const {User} = require('../models/user');
const router = express.Router();

router.post('/login', async(req,res)=>{
    try {
        
    } catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
})