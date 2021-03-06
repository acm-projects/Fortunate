const unirest = require('unirest');
const app = require('express')();

const API_KEY = require('../config.json').API_KEY;
const region = "US";




exports.marketSummary = (req, res) => {
    const db = require('../util/admin').admin.firestore();
    const result = getMarketSummary;

    db.doc('/api/market').set(result)
    .then(doc => {
        return res.status(200).json({token});
    }).catch(err => {
        console.error(error);
        return res.status(500).json({error: error.code}); 
    })
}










/**
 * Returns the live summary information of market by region
 */
getMarketSummary = unirest.get(`https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-summary?
    region=${region}`)
        .header("X-RapidAPI-Host", "apidojo-yahoo-finance-v1.p.rapidapi.com")
        .header("X-RapidAPI-Key", API_KEY)
        .end(result => {
            return {status: result.status, headers: result.headers, body: result.body};
    });

