const config = require("../util/config");

const firebase = require("firebase");
firebase.initializeApp(config);

const { validateLoginData, validateSignUpData } = require("../util/validators");

const { getTickerList } = require('../util/helper');
const { getTicker } = require('../util/yahooapi');

// Handles log-in requests
exports.login = (request, response) => {
	const user = {
		email: request.body.email,
		password: request.body.password,
	};

	// Validates given user credentials
	const { valid, errors } = validateLoginData(user);
	if (!valid) return response.status(400).json(errors); // Error 400: Client Error - Bad Request

	// Finds user token using given credentials
	firebase
		.auth()
		.signInWithEmailAndPassword(user.email, user.password)
		.then(data => {
			return data.user.getIdToken();
		})
		.then(token => {
			return response.json({ token });
		})
		.catch(err => {
			console.error(err);
			if (err.code === "auth/wrong-password")
				return response
					.status(403)
					.json({ general: "Incorrect credentials" }); // Error 403: Client Error - Forbidden
			return response.status(500).json({ error: err.code }); // Error 500: Server Error - Internal Server Error
		});
};

exports.signup = (req, res) => {
	const db = require('../util/admin').admin.firestore();
	const newUser = {
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        confirm_password: req.body.confirm_password
    }
    const { valid, errors } = validateSignUpData(newUser);
	if (!valid) return res.status(400).json(errors); // Error 400: Client Error - Bad Request
  
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
}





/**
 * Updates all database ticker values for the supported symbols
 */
 const updateTickers = () => {
    const tickerList =  getTickerList();    // TODO: FIGURE OUT WHAT TICKERS WE NEED
    
    tickersToAdd = [];
    tickerList.s&p500.forEach((ticker) => {
       tickersToAdd.push(ticker);
       if ( tickersToAdd.count === 6) {
           // TODO: Make a post request to get the value for a group of 6 tickers
           tickersToAdd.length = 0;
       }
       // TODO: Make a post request to get the value for a group of tickers leftover in tickersToAdd
    });
}


/**
 * @returns Quote info
 * 
 * Request format:
 * {
 *      symbol : "{symbol}"
 * }
 */
exports.getQuoteInfo = (req, res) => {
    const db = require('../util/admin').admin.firestore();
    const doc = db.collection('ticker').doc(req.body.symbol).get(); // get the document ref from database

    if ( !doc.exists ) { // if document DOESN't exist
        return res.status(400).json({ error: `${req.body.symbol} is not supported`});
    }
    else { // if document DOES exist
        return res.status(200).json(doc.data())
    }
}