const jwt = require("jsonwebtoken");
const config = require("config");
const mongoose = require('mongoose');

module.exports = function (req, res, next) {
	//Get Header
	const token = req.header("x-auth-token");

	//check if not token
    if(!token){
        return res.status(401).json({error:"No token, authorization denied"});
        

    }
    try{
        const decoded = jwt.verify(token,config.get('jwtSecret'));
        console.log(decoded); 
        next();
    }
    catch(err){
        res.status(400).json({error:"Invalid Token"})
    }



};


