const functions = require("firebase-functions");
const { user } = require("firebase-functions/lib/providers/auth");
const app = require("express")();

const { login, signup, trade, getAuthUser, dayValue } = require("./handlers/users");

const {FBAuth} = require('./util/fbauth');

const {getTicker} = require('./util/yahooapi');

// Users Routes
app.post("/login", login);
app.post("/signup", signup);

app.post("/trade", FBAuth, trade);
app.post("/ticker", getTicker);

app.get("/user", FBAuth, getAuthUser);
app.get("/value", FBAuth, dayValue);

exports.api = functions.https.onRequest(app);
