const functions = require("firebase-functions");
const app = require("express")();

const { login, signup } = require("./handlers/users");
const { getMarketSummary, getQuotes } = require("./util/yahooapi");

// Users Routes
app.post("/login", login);
app.post("/signup", signup);

// API routs 
app.post("/market-summary", getMarketSummary);
app.post("/get-quotes", getQuotes); 
app.post("/get-ticker", getTicker)

exports.api = functions.https.onRequest(app);
