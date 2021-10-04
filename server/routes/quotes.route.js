const express = require('express');

const {httpGetAllQuotes, httpGetQuote} = require('./quotes.controller');
const router = express.Router();

router.get('/quotes',httpGetAllQuotes);
router.get('/quotes/:id',httpGetQuote);

module.exports = router;