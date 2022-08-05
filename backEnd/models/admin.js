const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    email:{type:String, required:true},
    password:{type:String, required:true},
    usersToBeApproved:{type:Array,default:[]},
    accountsToBeApproved:{type:Array, default:[]},
    loansToBeApproved:{type:Array, default:[]}
});

module.exports = mongoose.model('Admin', adminSchema);