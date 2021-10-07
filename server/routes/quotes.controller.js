const {getAllQuotes, getQuote, addQuote} = require('../models/quotes.model');

async function httpGetAllQuotes(req,res){
    const response = await getAllQuotes();

    return res.status(200).json(response);
}

async function httpGetQuote(req,res){
        const response = await getQuote(req.params.id);

        return res.status(200).json(response);
}

async function httpAddQuote(req,res){
    
    await res.status(200).json(addQuote(req.body));
}

module.exports = {
    httpGetAllQuotes,
    httpGetQuote,
    httpAddQuote,
}