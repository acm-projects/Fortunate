const functions = require("firebase-functions");
const { user } = require("firebase-functions/lib/providers/auth");
const app = require("express")();

const {
	login,
	signup,
	trade,
	getAuthUser,
	dayValue,
	getQuoteInfo,
    updateTickersAndUserValues,
	getTransactions,
	getAccBD,
	getValueHistory,
	getTestValueHistory
} = require("./handlers/users");

const { FBAuth } = require("./util/fbauth");
const {
	getMarketSummary,
	getQuotes,
	getOneTicker,
} = require("./util/yahooapi");

// Users Routes
app.post("/login", login);
app.post("/signup", signup);
app.get("/get-quote-info", getQuoteInfo);

// API routs
// app.post("/market-summary", getMarketSummary);   // not currently used but could be usuful in future
// app.post("/get-quotes", getQuotes);              // not currently used but could be usuful in future
app.post("/update-ticker", getOneTicker); // to manualy update one ticker

app.post("/trade", FBAuth, trade);

app.post("/stock", getQuoteInfo);

app.get("/user", FBAuth, getAuthUser);
app.get("/value", FBAuth, dayValue);
app.get("/transactions", FBAuth, getTransactions);
app.get("/breakdown", FBAuth, getAccBD);
app.get("/valueot", FBAuth, getValueHistory);

app.get("/portfolio", FBAuth, getValueHistory);

// Scheduled task to update tickers and user values
exports.scheduledFunction = functions.pubsub.schedule('0 16 * * 1-5')
    .timeZone('America/New_York')
    .onRun(updateTickersAndUserValues);

//app.get('/init', init);

exports.api = functions.https.onRequest(app);
