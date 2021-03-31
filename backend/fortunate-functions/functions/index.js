const functions = require("firebase-functions");
const app = require("express")();

const { login, signup, getQuoteInfo, updateTickers } = require("./handlers/users");
const { getMarketSummary, getQuotes } = require("./util/yahooapi");

// Users Routes
app.post("/login", login);
app.post("/signup", signup);
app.get("/get-quote-info", getQuoteInfo);

// API routs 
// app.post("/market-summary", getMarketSummary); // not currently used but could be usuful in future
// app.post("/get-quotes", getQuotes); // not currently used but could be usuful in future
app.post("/update-tickers", updateTickers);



exports.api = functions.https.onRequest(app);
