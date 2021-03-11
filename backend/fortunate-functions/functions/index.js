const functions = require("firebase-functions");
const app = require("express")();

const { login, signup } = require("./handlers/users");
const { getMarketSummary, getQuotes } = require("./api/yahoo-finance-api");

// Users Routes
app.post("/login", login);
app.post("/signup", signup);

app.post("/market-summary", getMarketSummary);
app.post("/get-quotes", getQuotes); 

exports.api = functions.https.onRequest(app);
