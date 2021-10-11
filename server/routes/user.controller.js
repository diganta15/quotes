const {signup} = require('../models/user.model');

async function httpAddUser(req,res){
    const response = await signup(req.body);
   return res.status(200).json(response);

}

async function httpLogInUser(req,res){
    res.send("log in");
}

async function httpLogOutUser(req,res){
    res.send("log out")
}

module.exports = {
    httpAddUser,
    httpLogInUser,
    httpLogOutUser
}