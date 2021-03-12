// const fs = require('fs');
// let key;

const unirest = require('unirest');
const app = require('express')();
const db = require('./admin').admin.firestore();

const API_KEY = require('../config.json').API_KEY;
const lang = "en";
const region = "US";

// fs.readFile('config.json', function(error, data) {
//     if (error) {
//         console.log(error);
//         throw error;
//     }
//     key = JSON.parse(data).rapidapi;//['rapidapi'];
//     console.log(key);
// });


// Previous API function
//#######################################################################
// exports.getQuote = ticker => {
//     var req = unirest("GET", "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-profile");

//     req.query({
//         "symbol": ticker,
//         "region": "US"
//     });

//     req.headers({
//         "x-rapidapi-key": "6a7ac12fa3mshf6023315c3a449bp1044b8jsn23cd53a21411",
//         "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
//         "useQueryString": true
//     });


//     req.end(function (res) {
//         if (res.error) throw new Error(res.error);

//         console.log(res.body.price);
//         return res.body.price;
//     });
// };
//#######################################################################





/**
 * Store the intraday values for a stock with an interval of 1 minute to the database
 * Stored in:
 *      Collection: "tickers"
 *      Doc: name of the symbol
 * 
 * Request body:
 * {
 *     "ticker": "stock_symbol"
 * }
 */ 
exports.getTicker = (req, res) => {
    let ticker = req.body.ticker;
    //console.log(ticker);
    if(ticker === undefined) throw new Error("No ticker entered.");

    unirest
        .get(`https://yahoo-finance-low-latency.p.rapidapi.com/v8/finance/chart/${ticker}`)
        .query({
            "interval": "1m",
            "range": "1d",
            "region": region,
            "lang": lang
        }).headers({
            "x-rapidapi-key": API_KEY,
            "x-rapidapi-host": "yahoo-finance-low-latency.p.rapidapi.com",
            "useQueryString": true
        }).end((result) => {
            if (result.error) throw new Error(result.error);

            tickerObj = 
            {
                dataGranularity: result.body.chart.result[0].meta.dataGranularity,
                range: result.body.chart.result[0].meta.range,
                timestamp: result.body.chart.result[0].timestamp,
                indicators: 
                {
                    open: result.body.chart.result[0].indicators.quote[0].open,
                    close: result.body.chart.result[0].indicators.quote[0].close,
                    high: result.body.chart.result[0].indicators.quote[0].high,
                    low: result.body.chart.result[0].indicators.quote[0].low,
                    volume: result.body.chart.result[0].indicators.quote[0].volume
                }
            }
            // console.log(result.body.chart.result[0].meta.tradingPeriods);
            // console.log(result.body.chart.result[0].indicators.quote);
            db.collection('tickers').doc(result.body.chart.result[0].meta.symbol).set(tickerObj)
            .then(() => {
                return res.status(201).json({success: `Intraday values of ${ticker} with an interval of 1 minute are saved to the database`});
            }).catch(error => {
                console.error(error);
                return res.status(500).json({error: error.code}); 
            })
        });
}