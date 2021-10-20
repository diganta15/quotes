const express = require('express');

const {httpAddUser, httpLogInUser} = require('./user.controller');
const router = express.Router();

//@desec    Add A User
//@access   Public
//@route    /user/signup
router.post("/signup", httpAddUser);

//@desec    Log In A User
//@access   Public
//@route    /user/login
router.get("/login", httpLogInUser);


module.exports = router;