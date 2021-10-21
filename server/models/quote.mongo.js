const mongoose = require("mongoose");

const quote = mongoose.Schema({
	userId:{
		type:String,
		required:true,
	},
	author: {
		type: String,
		required: true,
	},
	quote: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		required: true,
	},
});

module.exports = mongoose.model('quote',quote);