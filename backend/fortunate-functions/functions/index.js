const functions = require("firebase-functions");
const app = require("express")();

const { login } = require("./handlers/users");

// Users Routes
app.post("/login", login);

exports.api = functions.https.onRequest(app);
