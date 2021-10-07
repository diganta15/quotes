const quote = require("../models/quote.mongo");

const quotes = [
	{
		id: "1",
		author: "Albert Camus",
		quote:
			"In the depth of winter, I finally learned that within me there lay an invincible summer..",
		date: new Date(),
	},
	{
		id: "2",
		author: "Albert Camus",
		quote:
			"The struggle itself towards the heights is enough to fill a man's heart.One must imagine Sisyphus happy.",
		date: new Date(),
	},
	{
		id: "3",
		author: "Albert Camus",
		quote: "Autumn is a second spring when every leaf is a flower.",
		date: new Date(),
	},
];

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

module.exports = {
	getAllQuotes,
	getQuote,
	addQuote,
};
