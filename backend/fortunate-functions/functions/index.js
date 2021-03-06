const functions = require("firebase-functions");
const app = require("express")();

const { login, signup } = require("./handlers/users");

// Users Routes
app.post("/login", login);
app.post("/signup", signup);

exports.api = functions.https.onRequest(app);
