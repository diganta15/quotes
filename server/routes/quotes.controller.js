const {
	getAllQuotes,
	getQuote,
	addQuote,
	getUserQuotes,
	updateQuote,
} = require("../models/quotes.model");

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
		res.status(500).json({ error: "Server Error" });
	}
}

async function httpUpdateQuote(req, res) {
	try {
		const id = req.params.id;
		const body = req.body;

		if (!req.body.author) {
			return res.status(400).json({ error: "Please add author" });
		}
		if (!req.body.quote) {
			return res.status(400).json({ error: "Please add quote" });
		}
		const response = await updateQuote(id, body);

		return res.status(200).json(response);
	} catch {}
}

async function httpGetUserQuotes(req, res) {
	try {
		const response = await getUserQuotes(req.params.id);
		return res.status(200).json(response);
	} catch (err) {
		return res.status(500).json({ error: "Server Error" });
	}
}

module.exports = {
	httpGetAllQuotes,
	httpGetQuote,
	httpAddQuote,
	httpUpdateQuote,
	httpGetUserQuotes,
};
