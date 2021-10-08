const mongoose = require('mongoose');

const MONGO_URL = process.env.MONGO_URL;

function mongoConnect(){
    try{
        mongoose.connect(MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,

        }).then(()=>console.log('MongoDb Connected'));

    }
    catch(err){
        console.log(error);
        process.exit(1);
    }
}

module.exports = mongoConnect;