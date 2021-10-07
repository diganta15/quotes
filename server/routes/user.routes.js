const express = require('express');

const {httpAddUser, httpLogInUser, httpLogOutUser} = require('./user.controller');
const router = express.Router();

router.post("/signup", httpAddUser);
router.post("/login", httpLogInUser);
router.post("/logout",httpLogOutUser);

module.exports = router;