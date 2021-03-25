const unirest = require('unirest');
const app = require('express')();
const db = require('./admin').admin.firestore();

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
            // console.log(result.body.marketSummaryResponse);
            db.collection('api').doc('market').set(result.body.marketSummaryResponse)
            .then(() => {
                return res.status(200).json({success: "Success"});
            }).catch(error => {
                console.error(error);
                return res.status(500).json({error: error.code}); 
            })
        });
}


/**
 * Saves the the quotes by symbols to the database
 * 
 * Request format:
 * {
 *     symbols: [symbol_1, symbol_2, ..., symbol_10]
 * }
 */ 
exports.getQuotes = (req, res) => {
    let symbols = "";
    for(key of req.body.symbols) {
        symbols += key + ",";
    }
    symbols = symbols.slice(0, symbols.length - 1); //delete the last comma 
    console.log(symbols);

    unirest
        .get("https://yahoo-finance-low-latency.p.rapidapi.com/v6/finance/quote")
        .query({
            "region": region,
            "lang": lang,
            "symbols": symbols
        }).headers({
            "x-rapidapi-key": API_KEY,
            "x-rapidapi-host": "yahoo-finance-low-latency.p.rapidapi.com",
            "useQueryString": true
        }).end((result) => {
            if (result.error) throw new Error(result.error);
            // console.log(result.body.quoteResponse);
            db.collection('api').doc('quotes').set(result.body.quoteResponse, {merge: true})
            .then(() => {
                return res.status(200).json({success: "Success"});
            }).catch(error => {
                console.error(error);
                return res.status(500).json({error: error.code}); 
            })
        });
}


/**
 * Store the intraday values for a single stock with an interval of 1 minute to the database
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
                    // volume: result.body.chart.result[0].indicators.quote[0].volume
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