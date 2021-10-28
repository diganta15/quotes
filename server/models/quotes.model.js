const jwt = require("jsonwebtoken");
const config = require("config");
const quote = require("../models/quote.mongo");
const user = require("./user.mongo");

async function getAllQuotes() {
	try {
		const res = await quote.find({}).sort({ date: -1 });
		return res;
	} catch (err) {
		const error = { error: "Cannot get data from database" };
		return error;
	}
}

async function getQuote(id) {
	try {
		const res = await quote.findOne({ _id: id });
		return res;
	} catch (err) {
		const error = { error: "Cannot get quote" };
		return error;
	}
}

async function saveData(data) {
	try {
		const newQuote = new quote({
			...data,
		});
		const res = await newQuote.save(data);

		return res;
	} catch (err) {
		const error = {
			error: "Cannot save data to database",
		};
		return error;
	}
}

async function addQuote(quote) {
	const quoteWithDefaultFields = {
		...quote,
		date: new Date(),
	};

	const res = await saveData(quoteWithDefaultFields);
	return res;
}

async function updateQuote(id, data) {
	data.date = new Date();
	console.log(data);
	const res = await quote.findByIdAndUpdate(id, data, { new: true });
	console.log(res);
	return res;
}

async function deleteQuote(id, token) {
	try {
		
		const secret = config.get("jwtSecret");
		const decoded = jwt.verify(token, secret);
		const email = decoded.email;
		
		const userObj = await user.findOne({ email });
		
		if (!userObj) {
			return { status: 400, error: "User Does Not Exist" };
		}

		const { _id } = userObj;
		const res = await quote.findById(id);

		if (!res) {
			return { status: 400, error: "Cannot Find Contact" };
		}

		if (res.userId == _id) {
			await quote.findByIdAndDelete(id);

			return { msg: "Contact Removed" };
		} else {
			return { status: 403, error: "Cannot Delete The User" };
		}
	} catch (err) {
		return { status: 500, error: "Internal Server Error" };
	}
}

async function getUserQuotes(id) {
	try {
		const res = await quote.find({ userId: id }).sort({ date: -1 });
		return res;
	} catch (err) {
		const error = { error: "Cannot get user's quote" };
		return error;
	}
}

module.exports = {
	getAllQuotes,
	getQuote,
	addQuote,
	updateQuote,
	deleteQuote,
	getUserQuotes,
};
