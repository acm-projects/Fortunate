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

const db = admin.firestore();


// Signup Route
app.post("/signup", (req, res) => {
    // User sign up information
    const newUser = {
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        confirm_password: req.body.confirm_password
    }

    // Creating Database Entry for User
    let token;
    let userID;
    db.doc(`/users/${newUser.username}`).get().then(doc => {
        if(doc.exists) {
            return res.status(400).json({ username: 'This username is already in use.'});
        } else {
            return firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password);
        }
    }).then(data => {
        userID = data.user.uid;
        return data.user.getIdToken();
    }).then(authtoken => {
        token = authtoken;
        const credentials = {
            username: newUser.username,
            email: newUser.email,
            createdAt: new Date().toISOString(),
            userID: userID,
        };
        return db.doc(`/users/${newUser.username}`).set(credentials);
    }).then(() => {
        return res.status(200).json({token});
    }).catch(error => {
        console.error(error);
        return res.status(500).json({error: error.code}); 
    })
    /*
    firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password).then((data) => {
        return res.status(201).json({message: `User ${data.user.uid} signed up successfully`});
    }).catch((error) => {
        console.error(error);
        return res.status(500).json({error: error.code});
    });
    */
    // TODO: Validate Signup
});

exports.api = functions.https.onRequest(app);