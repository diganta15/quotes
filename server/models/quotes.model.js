const quote = require('../models/quote.mongo');

const quotes = [
    {
        id: "1",
        author: "Albert Camus",
        quote: "In the depth of winter, I finally learned that within me there lay an invincible summer..",
        date: new Date(),
    },
    {
        id: "2",
        author: "Albert Camus",
        quote: "The struggle itself towards the heights is enough to fill a man's heart.One must imagine Sisyphus happy.",
        date: new Date(),
    },
    {
        id:"3",
        author:"Albert Camus",
        quote:"Autumn is a second spring when every leaf is a flower.",
        date: new Date(),
    }
]

function getAllQuotes(){
    return quotes;
}

function getQuote(id){
    return quotes.filter(quote => quote.id === id);
}

async function saveData(data){
    console.log(data);

    const newQuote = new quote(data);

   const res = await newQuote.save(data);
   return res;
}

async function addQuote(quote){
    const quoteWithDefaultFields = {
        ...quote,
        date:new Date(),
    }  
    return saveData(quoteWithDefaultFields);
   
}

module.exports = {
    getAllQuotes,
    getQuote,
    addQuote,
}