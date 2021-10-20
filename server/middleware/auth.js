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
        console.log(req.email);

        console.log(decoded); 
    }
    catch(err){

    }

};


