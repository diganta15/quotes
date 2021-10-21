const quote = require("../models/quote.mongo");




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
	try{
        const res = await quote.findOne({_id:id});
        return res;
    }
    catch(err){
        const error = {error:"Cannot get quote"};
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

async function getUserQuotes(id){
	try {
		const res = await quote.find({ userId: id }).sort({date:-1});
		return res;
	}
	catch (err) {
		const error = { error: "Cannot get user's quote" };
		return error;
	}
}

module.exports = {
	getAllQuotes,
	getQuote,
	addQuote,
	getUserQuotes
};
