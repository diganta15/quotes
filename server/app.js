const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');

//load config
dotenv.config({path:'./config/config.env'})
const mongoConnect = require('./services/mongo');

const app = express()

const PORT = 8000;


mongoConnect();

app.use(morgan('dev'))
app.use(express.json());
app.use(cors());
app.get("/",(req,res)=>{
    res.send('Working');
});
app.use("/quotes",require('./routes/quotes.route'));
app.use("/user",require('./routes/user.routes'));
app.listen(PORT,()=>console.log(`Listening on port ${PORT}`));