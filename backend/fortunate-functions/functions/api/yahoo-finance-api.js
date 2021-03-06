const unirest = require('unirest');
const app = require('express')();
const db = require('../util/admin').admin.firestore();

const API_KEY = require('../config.json').API_KEY;
const lang = "en";
const region = "US";


/**
 *  Get live market summary information at the request time
 */ 
exports.getMarketSummary = (req, res) => {
    unirest
        .get("https://yahoo-finance-low-latency.p.rapidapi.com/v6/finance/quote/marketSummary")
        .query({
            "region": region,
            "lang": lang
        }).headers({
            "x-rapidapi-key": API_KEY,
            "x-rapidapi-host": "yahoo-finance-low-latency.p.rapidapi.com",
            "useQueryString": true
        }).end((result) => {
            console.log(result.error);
            if (result.error) throw new Error(result.error);
            console.log(result.body.marketSummaryResponse);
            // db.collection('api').doc('market').set(result.body.marketSummaryResponse.result)
            // .then(() => {
            //     return res.status(200).json({success: "Success"});
            // }).catch(error => {
            //     console.error(error);
            //     return res.status(500).json({error: error.code}); 
            // })
        });
}


// /**
//  *  Saves the the quotes by symbols to the database
//  */ 
// exports.getQuotes = (req, res) => {
//     let symbols;
//     for(key in req.body) {
//         symbols += req.body[key] + ",";
//     }
//     symbols = symbols.slice(0, symbols.length - 1); //delete the last comma 

//     unirest
//         .get("https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-quotes")
//         .query({
//             "region": "US",
//             "symbols": symbols
//         }).headers({
//             "x-rapidapi-key": API_KEY,
//             "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
//             "useQueryString": true
//         }).end((result) => {
//             if (result.error) throw new Error(result.error);
//             // console.log(result.body.quoteResponse);
//             db.collection('api').doc('quotes').set(result.body.quoteResponse, {merge: true})
//             .then(() => {
//                 return res.status(200).json({success: "Success"});
//             }).catch(error => {
//                 console.error(error);
//                 return res.status(500).json({error: error.code}); 
//             })
//         });
// }