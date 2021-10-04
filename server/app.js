const express = require('express');
const morgan = require('morgan')

const app = express()

const PORT = 3000;

app.use(morgan('dev'))

app.get("/",(req,res)=>{
    res.send('Working');
});
app.use("/stories",require('./routes/stories.route'));
app.listen(PORT,()=>console.log(`Listening on port ${3000}`));