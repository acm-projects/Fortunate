const functions = require("firebase-functions");
const app = require("express")();

<<<<<<< HEAD
const { login } = require("./handlers/users");

// Users Routes
app.post("/login", login);
=======
const { login, signup } = require("./handlers/users");

// Users Routes
app.post("/login", login);
app.post("/signup", signup);
>>>>>>> sign_up

exports.api = functions.https.onRequest(app);
