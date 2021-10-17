const { getAllQuotes, getQuote, addQuote } = require("../models/quotes.model");

async function httpGetAllQuotes(req, res) {
	const response = await getAllQuotes();
	return res.status(200).json(response);
}

async function httpGetQuote(req, res) {
	const response = await getQuote(req.params.id);
	return res.status(200).json(response);
}

async function httpAddQuote(req, res) {
	try {
		if (!req.body.author) {
			return res.status(400).json({ error: "Please add author" });
		}
		if (!req.body.quote) {
			return res.status(400).json({ error: "Please add quote" });
		}
		const response = await addQuote(req.body);
		console.log(response);
		return res.status(200).json(response);
	} catch (err) {
		await res.status(500).json({ error: "Server Error" });
	}
}

module.exports = {
	httpGetAllQuotes,
	httpGetQuote,
	httpAddQuote,
};
