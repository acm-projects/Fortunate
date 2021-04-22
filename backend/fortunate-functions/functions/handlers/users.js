const config = require("../util/config");

const firebase = require("firebase");
firebase.initializeApp(config);

const { validateLoginData, validateSignUpData } = require("../util/validators");
const { user } = require("firebase-functions/lib/providers/auth");

const db = require('../util/admin').admin.firestore();

// const FBAuth = require('../util/fbauth');
const { getTickerList } = require('../util/helper');
const { getManyTickers, processTickers } = require('../util/yahooapi');

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
			if (err.code === "auth/user-not-found")
				return response.status(403).json({ general: "User not found" }); // Error 403: Client Error - Forbidden
			if (err.code === "auth/wrong-password")
				return response
					.status(403)
					.json({ general: "Incorrect credentials" }); // Error 403: Client Error - Forbidden
			return response.status(500).json({ error: err.code }); // Error 500: Server Error - Internal Server Error
		});
};

exports.signup = (request, response) => {
	const db = require("../util/admin").admin.firestore();
	const newUser = {
		username: request.body.username,
		email: request.body.email,
		password: request.body.password,
		confirmPassword: request.body.confirmPassword,
	};
	const { valid, errors } = validateSignUpData(newUser);
	if (!valid) return response.status(400).json(errors); // Error 400: Client Error - Bad Request

	// Creating Database Entry for User
	let token;
	let userID;
	db.doc(`/users/${newUser.username}`)
		.get()
		.then(doc => {
			if (doc.exists) {
				return response
					.status(400)
					.json({ username: "This username is already in use." });
			} else {
				return firebase
					.auth()
					.createUserWithEmailAndPassword(
						newUser.email,
						newUser.password
					);
			}
		})
		.then(data => {
			userID = data.user.uid;
			return data.user.getIdToken();
		})
		.then(authtoken => {
			token = authtoken;
			const credentials = {
				username: newUser.username,
				email: newUser.email,
				createdAt: new Date().toISOString(),
				userID: userID,
			};
            //
            const portfolio = {
                cash : 1000000,
                securities : {

                }
            }
            db.doc(`/userdata/${newUser.username}`).set( {portfolio : portfolio});
			return db.doc(`/users/${newUser.username}`).set(credentials);
		})
		.then(() => {
			return response.status(200).json({ token });
		})
		.catch(error => {
			console.error(error);
			return response.status(500).json({ error: error.code });
		});
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

// Function to get stock price at nearest minute from database
// Returns -1 if there is an error
async function getStockPrice(ticker) {
    let ret = -1;
    // Find entry in database
    await db.doc(`tickers/${ticker}`).get().then(doc => {
        if (doc.exists) {
            let data = doc.data();
            
            // Calculate timestamp to the nearest minute
            let timestamp = ~~(Date.now() / 1000) - 86400;
            timestamp = Math.round(timestamp / 60) * 60;
            
            //timestamp = 1615581420;
            console.log('Timestamp: ' + timestamp);
            
            // If the time is in the trading day
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

    // Get price from database, to nearst 100th of a dollar
    var price = await getStockPrice(req.body.symbol);
    price = ~~(price * 100) / 100;
    console.log("Price: " + price);

    // If the user is trying to order outside of the trading day
    if(price == -1) {
        return res.status(400).json({error : "Can't order at this time."});
    }


    let userport = {};
    let userref;
    let transaction = {};
    transaction.price = price;
    transaction.quantity = req.body.quantity;
    transaction.timestamp = new Date().toISOString();
    
    // Determine which user is sending the request
    db.doc(`users/${req.user.username}`).get().then((doc) => {
        if(doc.exists) {
            userref = db.collection('userdata').doc(req.user.username);
            return userref.get();
        }
    }).then(async (data) => {

        // Get the users portfolio information
        userport = data.data().portfolio;

        // Variables for where the location of the data will be
        var path = 'portfolio.securities.' + req.body.symbol;
        var quantity = req.body.quantity;
        
        // Handle different request type: BUY or SELL
        if(req.body.type === "buy") {
            transaction.type = 'buy';
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
            transaction.type = 'sell';
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
        
        // Update Transactions for user
        const tres = await data.ref.collection('transactions').add(transaction);
        return res.json({Success : `Transaction succeeded with id: ${tres.id}`});
    }).catch((error) => {
        console.error(error);
        return res.status(500).json({error: error.code});
    });
}

// Similar function to getStockPrice, this one just takes a timestamp. getStockPrice may be removed and this one used instead.
async function getValueAt(ticker, timestamp) {
    let ret = -1;
    await db.doc(`tickers/${ticker}`).get().then(doc => {
        if (doc.exists) {
            let data = doc.data();
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

// Calculate a user's portfolio value
async function calculateUserValue(portfolio) {
    let value = portfolio.cash;
    console.log('Starting value: ' + value);
    const securities = Object.keys(portfolio.securities);
    console.log(securities);

    // Get value at end of day
    let timestamp = new Date();
    //timestamp.getDay()
    
    if(timestamp.getDay() === 0) {
        timestamp = timestamp - ( 86400000 * 2 );
    } else if(timestamp.getDay() === 6) {
        timestamp = timestamp - 86400000;
    }
    //let timestamp = 1615582740;
    timestamp = timestamp.setHours(20, 59, 0, 0);
    timestamp = timestamp / 1000;
    // Calculate value of the securities
    for(const s of securities) {
        let v = await getValueAt(s, timestamp);
        console.log('portfolio.securities[s]: ' + portfolio.securities[s]);
        value += portfolio.securities[s] * v;
    }
    console.log(value);
    return value;
}

// Calculate a user's account value at the end of the current day
exports.dayValue = async (req, res) => {
    db.doc(`users/${req.user.username}`).get().then((doc) => {
        if(!doc.exists) {
            //return res.status(400).json({error: 'User does not exist'})
        }
        return db.collection('userdata').doc(req.user.username).get();
    }).then(async (data) => {
        // Get the user's value
        let value = await calculateUserValue(data.data().portfolio);
        
        // Add entry into the database, named the current day. **THIS MAY CHANGE** may change this to a timestamp
        let date = new Date();
        date.setHours(0,0,0,0);
        date = date / 1000;
        date = '' + date;
        //date = date.toDateString();
        await data.ref.collection('value').doc(date).set({end: value});
        return res.status(200).json({value : value});
    }).catch((error) => {
        console.error(error);
        return res.status(500).json({error: error});
    });
};

/**
 * Updates all database ticker values for the supported symbols
 */
 const updateTickers = async (req, res) => {
    const tickerList = await getTickerList();    // The list of all supported stocks 
    
    tickersToAdd = [];
    // let req = { body: {}};
    // let res = {};
    tickerList.forEach((ticker) => { // add all the tickers into the array
        tickersToAdd.push(ticker);
        if ( tickersToAdd.length === 6) {   // when the number of tickers in the array reaches 6, call the api function
            req.body.tickers =
                [
                    tickersToAdd[0],
                    tickersToAdd[1],
                    tickersToAdd[2],
                    tickersToAdd[3],
                    tickersToAdd[4],
                    tickersToAdd[5]
                ];
            res = getManyTickers(req, res);
            console.log(tickersToAdd); // test log
            console.log(res.error); // test log

            if(res.error === true) {
                throw new Error("Error in looped ticker API call");
            }
            tickersToAdd.length = 0;
        }
    });

    // call an api function for the remaining tickers
    req.body.tickers = [];
    tickersToAdd.forEach((ticker) => {
        req.body.tickers.push(ticker);
    })
    console.log(tickersToAdd); // test log
    res = getManyTickers(req, res);
    if(res.error === true) throw new Error("Error in last ticker API call");
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
    const doc = db.collection('ticker').doc(req.body.symbol).get(); // get the document ref from database

    if ( !doc.exists ) { // if document DOES NOT exist
        return res.status(400).json({ error: `${req.body.symbol} is not supported`});
    }
    else { // if document DOES exist
        return res.status(200).json(doc.data())
    }
}

// TODO: Transction hisory
/* Returns:
 * {
 *      <transaction ID> : {
 *          price: <price>,
 *          quantity: <quantity>,
 *          timestamp: <timestamp ISO string>
 *          type: <buy/sell>
 *      }
 * }
 */
exports.getTransactions = (req, res) => {
    db.collection('userdata').doc(req.user.username).get().then(data => {
        // Makes sure the user exists
        if( !data.exists ) {
            //return res.status(400).json({error: 'User not found'});
        }
        return data.ref.collection('transactions').get();
    }).then(data => {
        if(data)

        // Get transactions
        var tr =  {};
        data.forEach(doc => {
            tr[doc.id] = doc.data();
        });
        return res.status(200).json(tr);
    }).catch(error => {
        console.error(error);
        return res.status(500).json({error:error});
    });
}
// TODO: Account Value break down
/* Returns:
 * {
 *    cashValue: <cash>,
 *    cashF: <float>, # This is a %
 *    stockF: <float> # This is a %
 * }
 * 
 */
exports.getAccBD = async (req, res) => {
    db.collection('userdata').doc(req.user.username).get().then(async (data) =>  {
        if( !data.exists ) {
            return res.status(400).json({error: 'User not found'});
        }
        const portfolio = data.data().portfolio;
        var value = portfolio.cash;
        var stockValue = await calculateUserValue(portfolio);
        var total = value + stockValue;
        return res.status(200).json({
            cashValue : total,
            cashF : value / total,
            stockF : stockValue / total
        });
    }).catch(error => {
        console.error(error);
        return res.status(500).json({
            error: error
        });
    });
}

// TODO: Account value history
/* Returns
 * {
 *      <timestamp> : <value>,  # Timestamp ex: 1617771600
 *      <timestamp> : <value>,
 *      ...
 * }
 */
exports.getValueHistory = (req, res) => {
    db.collection('userdata').doc(req.user.username).get().then(data => {
        // Check if user exists
        if( !data.exists ) {
            return res.status(400).json({error: 'User not found'})
        }
        return data.ref.collection('value').get();
    }).then(data => {
        // Get Values
        var tr =  {};
        data.forEach(doc => {
            tr[doc.id] = doc.data()['end'];
        });
        return res.status(200).json(tr);
    }).catch(error => {
        console.error(error);
        return res.status(500).json({error:error});
    });
}

// Implement Function to import list of tickers into firebase
/*
exports.init = (req, res) => {
    processTickers('tickers.txt');
    return res.status(200).json({});
}
*/


// Function to update User Value at the end of the day

const updateUserValues = async () => {
    db.collection('userdata').get().then(data => {
        data.forEach(async (user) => {
            const p = user.data().portfolio;
            let value = await calculateUserValue(p);
            // Add entry into the database, named the current day. **THIS MAY CHANGE** may change this to a timestamp
            let date = new Date();
            date.setHours(0,0,0,0);
            date = date / 1000;
            date = '' + date;
            //date = date.toDateString();
            await user.ref.collection('value').doc(date).set({end: value});
        });
    }).catch(error => {
        console.error(error);
    });
}


exports.updateTickersAndUserValues = async (req, res) => {
    // await updateUserValues();
    await updateTickers(req, res).then( () => {
        return res.status(200).json({success: 'success'});
    }).catch(error => {
        return res.status(500).json({error: error});
    });
}
