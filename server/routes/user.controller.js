
async function httpAddUser(req,res){
    res.send("signup")
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