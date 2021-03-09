const functions = require("firebase-functions");
const { user } = require("firebase-functions/lib/providers/auth");
const app = require("express")();

const { login, signup, trade, getAuthUser } = require("./handlers/users");

const {FBAuth} = require('./util/fbauth');

// Users Routes
app.post("/login", login);
app.post("/signup", signup);
app.post("/trade", FBAuth, trade);

app.get("/user", FBAuth, getAuthUser);

exports.api = functions.https.onRequest(app);
