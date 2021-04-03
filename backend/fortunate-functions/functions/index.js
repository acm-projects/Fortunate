const functions = require("firebase-functions");
const { user } = require("firebase-functions/lib/providers/auth");
const app = require("express")();

const { login, signup, trade, getAuthUser, dayValue, getQuoteInfo, updateTickers } = require("./handlers/users");

const {FBAuth} = require('./util/fbauth');

const { getMarketSummary, getQuotes, getOneTicker } = require("./util/yahooapi");

// Users Routes
app.post("/login", login);
app.post("/signup", signup);
app.get("/get-quote-info", getQuoteInfo);

// API routs 
// app.post("/market-summary", getMarketSummary);   // not currently used but could be usuful in future
// app.post("/get-quotes", getQuotes);              // not currently used but could be usuful in future
app.post("/update-ticker", getOneTicker);           // to manualy update one ticker



app.post("/trade", FBAuth, trade);

app.get("/user", FBAuth, getAuthUser);
app.get("/value", FBAuth, dayValue);

exports.api = functions.https.onRequest(app);
