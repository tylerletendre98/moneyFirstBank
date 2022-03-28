const connectDB = require('./startup/db')
const express = require('express');
const cors = require('cors');
const users = require('./routes/users')
const accounts = require('./routes/accounts')
const app = express();


connectDB()
app.use(cors())
app.use(express.json());
app.use('/api/users', users);
app.use('/api/accounts', accounts)



const port = process.env.PORT || 5000;
app.listen(port, ()=>{
    console.log(`Server started on port ${port}`);
});