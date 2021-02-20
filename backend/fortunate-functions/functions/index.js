const functions = require("firebase-functions");
const admin = require("firebase-admin");

// Initializing Express
admin.initializeApp();
const app = require("express")();

// Load config
var fs = require("fs");
const config = JSON.parse(fs.readFileSync("config.json"));
// console.log(config);

// Init app
const firebase = require("firebase");
firebase.initializeApp(config)
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

// Signup Route
app.post("/signup", (req, res) => {
    const newUser = {
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        confirm_password: req.body.confirm_password
    }
    firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password).then((data) => {
        return res.status(201).json({message: `User ${data.user.uid} signed up successfully`});
    }).catch((error) => {
        console.error(error);
        return res.status(500).json({error: error.code});
    });
    // TODO: Validate Signup
});

exports.api = functions.https.onRequest(app);