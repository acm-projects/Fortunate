const unirest = require('unirest');
const app = require('express')();

const API_KEY = require('../config.json').API_KEY;
const region = "US";

app.get('/market-summary', (req, res) => {

});


/**
 * Get live summary information of market by region and log it into console.
 */
exports.getMarketSummary = unirest.get(`https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-summary?
    region=${region}`)
        .header("X-RapidAPI-Host", "apidojo-yahoo-finance-v1.p.rapidapi.com")
        .header("X-RapidAPI-Key", API_KEY)
        .end(result => {
            console.log(result.status, result.headers, result.body);
    });