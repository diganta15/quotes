const express = require('express');

const {httpAddUser, httpLogInUser} = require('./user.controller');
const router = express.Router();

router.post("/signup", httpAddUser);
router.get("/login", httpLogInUser);


module.exports = router;