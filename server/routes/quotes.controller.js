const {getAllQuotes, getQuote} = require('../models/quotes.model');

async function httpGetAllQuotes(req,res){
    const response = await getAllQuotes();

    return res.status(200).json(response);
}

async function httpGetQuote(req,res){
        const response = await getQuote(req.params.id);

        return res.status(200).json(response);
}

module.exports = {
    httpGetAllQuotes,
    httpGetQuote
}