const mongoose = require('mongoose');

const MONGO_URL = "mongodb://diganta15:Diganta15@quotes-shard-00-00.r6oy0.mongodb.net:27017,quotes-shard-00-01.r6oy0.mongodb.net:27017,quotes-shard-00-02.r6oy0.mongodb.net:27017/database?ssl=true&replicaSet=atlas-jv2hxm-shard-0&authSource=admin&retryWrites=true&w=majority";

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