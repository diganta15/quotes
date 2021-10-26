const express = require("express");
const auth = require("../middleware/auth");

const {
	httpGetAllQuotes,
	httpGetQuote,
	httpAddQuote,
	httpGetUserQuotes,
	httpUpdateQuote,
} = require("./quotes.controller");
const router = express.Router();

//@desec    Get All The Quotes
//@access   Public
//@route    /quotes/
router.get("/", httpGetAllQuotes);

//@desec    Get Specific Quote
//@access   Public
//@route    /quotes/id
router.get("/:id", httpGetQuote);

//@desec    Add A Quote
//@access   Private
//@route    POST /quotes/add
router.post("/add", auth, httpAddQuote);

//@desec    Get User Quotes
//@access   Private
//@route    GET /quotes/me
router.get("/user/:id", auth, httpGetUserQuotes);

//@desec    Update Quote
//@access   Private
//@route    PUT /quotes/update/id
router.put("/update/:id", httpUpdateQuote);

module.exports = router;
