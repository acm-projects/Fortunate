const functions = require("firebase-functions");
const app = require("express")();

const { login, signup, trade } = require("./handlers/users");

const {FBAuth} = require('./util/fbauth');

// Users Routes
app.post("/login", login);
app.post("/signup", signup);
app.post("/trade",FBAuth, trade);

exports.api = functions.https.onRequest(app);
