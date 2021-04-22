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
 * Store the intraday values for a SINGLE stock with an interval of 1 minute to the database
 * Stored in:
 *      Collection: "tickers"
 *      Doc: name of the symbol
 * @param req
 * @param res
 * req = body : {
 *     "ticker": "stock_symbol"
 * }
 */ 
 exports.getOneTicker = (req, res) => {
    let ticker = req.body.ticker;
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
                    low: result.body.chart.result[0].indicators.quote[0].low
                    // volume: result.body.chart.result[0].indicators.quote[0].volume   // volume is not used but could be added
                }
            }
            db.collection('tickers').doc(result.body.chart.result[0].meta.symbol).set(tickerObj)
            .then(() => {
                return res.status(201).json({success: `Intraday values of ${ticker} with an interval of 1 minute are saved to the database`});
            }).catch(error => {
                console.error(error);
                return res.status(500).json({error: error.code}); 
            })
        });
}


/**
 * Store the intraday values for a multiple number of stocks with an interval of 1 minute to the database
 * @param req
 * @param res
 * res = {any}
 * req = body : {
 *     "tickers": 
 *      [
 *          {symbol_1},
 *          {symbol_2},
 *          {symbol_3},
 *          {symbol_4},
 *          {symbol_5},
 *          {symbol_6}
 *      ]
 * }
 * Stored in:
 *      Collection: "tickers"
 *      Doc: name of the symbol
 * 
 */ 
 exports.getManyTickers = (req, res) => {
    if(req.body.tickers === undefined) throw new Error("No tickers entered.");
    let ticker = req.body.tickers[0];

    let otherTickers = req.body.tickers[1];
    for(let i = 2; i < req.body.tickers.length; i++) {
        otherTickers += "," + req.body.tickers[i];
    }

    unirest
        .get(`https://yahoo-finance-low-latency.p.rapidapi.com/v8/finance/chart/${ticker}`)
        .query({
            "comparisons": otherTickers,
            "interval": "1m",
            "range": "1d",
            "region": region,
            "lang": lang
        }).headers({
            "x-rapidapi-key": API_KEY,
            "x-rapidapi-host": "yahoo-finance-low-latency.p.rapidapi.com",
            "useQueryString": true
        }).end( async (result) => {
            if (result.error) throw new Error(result.error);
            
            const batch = db.batch(); //create the batch for commit

            tickerObj =  // object for the first ticker
            {
                dataGranularity: result.body.chart.result[0].meta.dataGranularity,
                range: result.body.chart.result[0].meta.range,
                timestamp: result.body.chart.result[0].timestamp,
                indicators: 
                {
                    open: result.body.chart.result[0].indicators.quote[0].open,
                    close: result.body.chart.result[0].indicators.quote[0].close,
                    high: result.body.chart.result[0].indicators.quote[0].high,
                    low: result.body.chart.result[0].indicators.quote[0].low
                }
            }
            batch.set(db.collection('tickers').doc(result.body.chart.result[0].meta.symbol), tickerObj); // commit of the first ticker

            for(let i = 0; i < result.body.chart.result[0].comparisons.length; i++) {

                tickerObj = // objects for the rest of tickers
                {
                    dataGranularity: result.body.chart.result[0].meta.dataGranularity,
                    range: result.body.chart.result[0].meta.range,
                    timestamp: result.body.chart.result[0].timestamp,
                    indicators: 
                    {
                        open: result.body.chart.result[0].comparisons[i].open,
                        close: result.body.chart.result[0].comparisons[i].close,
                        high: result.body.chart.result[0].comparisons[i].high,
                        low: result.body.chart.result[0].comparisons[i].low
                    }
                }
                batch.set(db.collection('tickers').doc(result.body.chart.result[0].comparisons[i].symbol), tickerObj); // commit of the i-th ticker
            }

            await batch.commit() //commit the batch
            .then(() => {
                res.error = false;
                return res;
            }).catch(error => {
                console.error(error);
                res.error = true;
                return res;
            })
        });
}

exports.processTickers = async path => {
    let tickers = require('fs').readFileSync(path, 'utf-8').split(/\r?\n/);
    db.doc('/tickers/supportedTickers').set({'s&p500': tickers });
}
