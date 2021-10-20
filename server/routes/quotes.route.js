const express = require('express');
const auth = require('../middleware/auth');

const {httpGetAllQuotes, httpGetQuote, httpAddQuote} = require('./quotes.controller');
const router = express.Router();

//@desec    Get All The Quotes
//@access   Public
//@route    /quotes/
router.get('/',httpGetAllQuotes);

//@desec    Get Specific Quote
//@access   Public
//@route    /quotes/id
router.get('/:id',httpGetQuote);

//@desec    Add A Quote
//@access   Private
//@route    /quotes/add
router.post('/add',auth, httpAddQuote);





module.exports = router;