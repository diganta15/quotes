const {signup, login} = require('../models/user.model');

async function httpAddUser(req,res){
    if(!req.body.name){
        return res.status(400).json({"error":"Please add name"});
    }
    if(!req.body.email){
        return res.status(400).json({"error":"Please add email"});
    }
    if(!req.body.password){
        return res.status(400).json({"error":"Please add password"});
    }

    try{
        const response = await signup(req.body);
        return res.status(200).json(response);
    }
    catch(err){
       
        return res.status(500).json({error:"Internal Server Error"});
    }



}

async function httpLogInUser(req,res){

    try{
       return res.status(200).json(await login(req.body));
    }catch(err){
        return res.status(500).json({error:"Internal Server Error"});
    }

}

async function httpLogOutUser(req,res){
    res.send("log out")
}

module.exports = {
    httpAddUser,
    httpLogInUser,
    httpLogOutUser
}