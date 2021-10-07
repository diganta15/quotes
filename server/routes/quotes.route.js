const express = require('express');

const {httpGetAllQuotes, httpGetQuote, httpAddQuote} = require('./quotes.controller');
const router = express.Router();

router.get('/',httpGetAllQuotes);
router.get('/:id',httpGetQuote);
router.post('/add', httpAddQuote);

module.exports = router;