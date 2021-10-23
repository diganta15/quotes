const express = require('express');
const auth = require('../middleware/auth');

const {httpAddUser, httpLogInUser, httpGetLoggedInUser} = require('./user.controller');
const router = express.Router();

//@desec    Add A User
//@access   Public
//@route    /user/signup
router.post("/signup", httpAddUser);

//@desec    Log In A User
//@access   Public
//@route    /user/login
router.post("/login", httpLogInUser);

//@desec    Get Logged In User
//@access   Private
//@route    /user/getuser
router.get("/getuser",auth,httpGetLoggedInUser);

module.exports = router;