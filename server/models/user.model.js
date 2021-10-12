const config = require('config');
const bcrypt = require('bcrypt');
const user = require('./user.mongo');
const jwt = require('jsonwebtoken');
const secret = config.get("jwtSecret");

//hash the password using bcrypt
async function hashPassword(password){
const salt = await bcrypt.genSalt(10);
 return await bcrypt.hash(password,salt);
}

//save data to database
async function saveData(data) {
    try {
       
        const newQuote = new user({
            ...data,
        });
      
        const res = await newQuote.save(data);
       
        return res;
    } catch (err) {
        const error = {
            status:500,
            error: "Cannot save data to database",
        };
        return error;
    }
}


async function signup(data){

    const {password, email} = data;
    //check if user exists
    let exists = await user.findOne({email});

    if(exists){
        const error = {
            status:400,
            error:"User already exists"
        }
        return error;
    }
    //hash password and add hashed password
   const passwordHashed = await hashPassword(password);
   data.password = passwordHashed;
   //add date
   data.date = new Date();
    
    //json web token 
    const payload = {
        email:email
    }
    let webToken;
    webToken =await jwt.sign(payload,secret,{
        expiresIn:360000
    })
    data.jwt = webToken;
    //return the response after saving data
   const res = await saveData(data);
   return res;
}

module.exports={
    signup,
}