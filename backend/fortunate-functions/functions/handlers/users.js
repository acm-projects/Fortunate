const config = require("../util/config");

const firebase = require("firebase");
firebase.initializeApp(config);

const { validateLoginData, validateSignUpData } = require("../util/validators");
const { user } = require("firebase-functions/lib/providers/auth");

const db = require('../util/admin').admin.firestore();

// const FBAuth = require('../util/fbauth');
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

exports.getAuthUser = (req, res) => {
    let userData = {};

    // Make sure user exists
    db.doc(`users/${req.user.username}`).get().then((doc) => {
        if(doc.exists) {
            userData.credentials = doc.data();
            //return db.collection('userdata').where('username', '==', req.user.username).get();
            return db.collection('userdata').doc(req.user.username).get();
        }
    }).then((data) => {

        // Return user data
        console.log("Data:\n" + data.data());
        userData.portfolio = data.data().portfolio;
        return res.json(userData);
    }).catch((error) => {
        console.error(error);
        return res.status(500).json({error: error.code});
    });
};

async function getStockPrice(ticker) {
    // TODO: GET STOCK PRICE FROM DATABASE
    let ret = -1;
    await db.doc(`tickers/${ticker}`).get().then(doc => {
        if (doc.exists) {
            let data = doc.data();
            let timestamp = ~~(Date.now() / 1000) - 86400;
            //timestamp = Math.round(timestamp / 60) * 60;
            timestamp = 1615581420;
            console.log('Timestamp: ' + timestamp);
            if (!(timestamp < data.timestamp[0] || timestamp > data.timestamp[389])) {
                price = data.indicators.open[data.timestamp.indexOf(timestamp)];
                console.log("price: " + price);
                ret = price;
            }
        }
    });
    console.log(ret);
    return ret;
}

exports.trade = async (req,res) => {

    /*
     * req format: 
     * {
     *      type = "buy/sell"
     *      symbol = "TICKER",
     *      quantity = 123     
     * }
     */

    // TODO: VALIDATE TRADE TIME
    // TODO: GET STOCK INFORMATION FROM DATABASE
    var price = await getStockPrice(req.body.symbol);
    price = ~~(price * 100) / 100;
    console.log("Price: " + price);
    let userport = {};
    let userref;
    
    // Determine which user is sending the request
    db.doc(`users/${req.user.username}`).get().then((doc) => {
        if(doc.exists) {
            userref = db.collection('userdata').doc(req.user.username);
            return userref.get();
        }
    }).then((data) => {

        // Get the users portfolio information
        userport = data.data().portfolio;

        // Variables for where the location of the data will be
        var path = 'portfolio.securities.' + req.body.symbol;
        var quantity = req.body.quantity;
         
        // Handle different request type: BUY or SELL
        if(req.body.type === "buy") {

            // Make sure the user has enough money to purchase
            if(price * req.body.quantity > userport.cash) {
                return res.status(400).json({error: "Not Enough Cash"});
            }
            // If they have enough money, buy the stock (update database)
            // If the user already owns shares, update the shares
            if(req.body.symbol in userport.securities) {
                //console.log(userport.securities[req.body.symbol][price]);
                quantity += userport.securities[req.body.symbol];
            }

            var updatehelper = {
                'portfolio.cash' : userport.cash - price * req.body.quantity,
                [path] : quantity
            };
            userref.update(updatehelper);
        } else if(req.body.type === "sell") {
            
            // Verify that the user actually owns shares
            if(!(req.body.symbol in userport.securities)) {
                return res.status(400).json({error: "No shares owned"});
            }
            // If they have enough shares, sell the stock (update database)
            if(req.body.quantity > userport.securities[req.body.symbol]) {
                return res.status(400).json({error: "Not Enough Shares"});
            }
            quantity = userport.securities[req.body.symbol] - req.body.quantity;

            if(quantity === 0) {
                quantity = require('../util/admin').admin.firestore.FieldValue.delete();
            }

            var updatehelper = {
                'portfolio.cash' : userport.cash + price * req.body.quantity,
                [path] : quantity
            };
            userref.update(updatehelper);
        } else {
            return res.status(400).json({error: "invalid trade type"});
        }
        
        // Placeholder return
        return res.json({Success : "Success"});
    }).catch((error) => {
        console.error(error);
        return res.status(500).json({error: error.code});
    });
    // TODO: VALIDATE ORDER
    // TODO: PROCESS ORDER
}