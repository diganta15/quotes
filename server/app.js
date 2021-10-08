const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');

//load config
dotenv.config({path:'./config/config.env'})
const mongoConnect = require('./services/mongo');

const app = express()

const PORT = 3000;


mongoConnect();

app.use(morgan('dev'))
app.use(express.json());
app.get("/",(req,res)=>{
    res.send('Working');
});
app.use("/quotes",require('./routes/quotes.route'));
app.use("/user",require('./routes/user.routes'));
app.listen(PORT,()=>console.log(`Listening on port ${3000}`));