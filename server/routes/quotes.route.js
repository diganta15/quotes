const express = require('express');

const {httpGetAllQuotes, httpGetQuote, httpAddQuote} = require('./quotes.controller');
const router = express.Router();

router.get('/quotes',httpGetAllQuotes);
router.get('/quotes/:id',httpGetQuote);
router.post('/quotes/add', httpAddQuote);

module.exports = router;