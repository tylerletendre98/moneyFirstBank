const connectDB = require('./startup/db')
const express = require('express');
const cors = require('cors');
const users = require('./routes/users')
const accounts = require('./routes/accounts')
const auth = require('./routes/auth');
const admin = require('./routes/admins')
const app = express();
const loans = require("./routes/loans")


connectDB()
app.use(cors())
app.use(express.json());
app.use('/api/users', users);
app.use('/api/accounts', accounts)
app.use('/api/auth', auth )
app.use('/api/admin', admin)
app.use('/api/loans', loans)


const port = process.env.PORT || 5000;
app.listen(port, ()=>{
    console.log(`Server started on port ${port}`);
});