const user = require('./user.mongo');
const bcrypt = require('bcrypt');



async function hashPassword(password){
const salt = await bcrypt.genSalt(10);
 return await bcrypt.hash("Diganta",salt);
}


async function saveData(data) {
    try {
        const newQuote = new user({
            ...data,
        });
        const res = await newQuote.save(data);

        return res;
    } catch (err) {
        const error = {
            error: "Cannot save data to database",
        };
        return error;
    }
}


async function signup(data){

    const {password} = data;

   const passwordHashed = await hashPassword(password);
   data.password = passwordHashed;
   data.date = new Date();

   const res = saveData(data);
   return res;
}

module.exports={
    signup,
}