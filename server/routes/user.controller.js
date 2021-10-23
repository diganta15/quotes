const { signup, login,getLoggedInUser } = require("../models/user.model");

async function httpAddUser(req, res) {
	if (!req.body.name) {
		return res.status(400).json({ error: "Please add name" });
	}
	if (!req.body.email) {
		return res.status(400).json({ error: "Please add email" });
	}
	if (!req.body.password) {
		return res.status(400).json({ error: "Please add password" });
	}

	try {
		const response = await signup(req.body);
		return res.status(200).json(response);
	} catch (err) {
		return res.status(500).json({ error: "Internal Server Error" });
	}
}

async function httpLogInUser(req, res) {
	try {
        if(!req.body.email){
            return res.status(400).json({error:"Please enter your email"});
            
        }
        if(!req.body.password){
            return res.status(400).json({error:"Please enter your password"});
        }
		return res.status(200).json(await login(req.body));
	} catch (err) {
		return res.status(500).json({ error: "Internal Server Error" });
	}
}

async function httpGetLoggedInUser(req,res){
	try{
		const token =req.headers['x-auth-token'];
	
	
		return res.status(200).json(await getLoggedInUser(token));
	}
	catch(err){
		return res.status(400).json({error:"Internal Sever Error"})
	}
}



module.exports = {
	httpAddUser,
	httpLogInUser,
	httpGetLoggedInUser
};
