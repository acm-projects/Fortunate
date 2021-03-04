const config = require("../util/config");

const firebase = require("firebase");
firebase.initializeApp(config);

const { validateLoginData, validateSignUpData } = require("../util/validators");

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

const yapi = require('../util/yahooapi');

exports.trade = (req,res) => {

    const trade = {
        symbol : req.body.ticker,
        quantity : req.body.quantity,
        type : req.body.type
    };
    console.log(trade);

    const testdata = {
        quoteSourceName: 'Nasdaq Real Time Price',
        regularMarketOpen: { raw: 687.99, fmt: '687.99' },
        averageDailyVolume3Month: { raw: 39798333, fmt: '39.8M', longFmt: '39,798,333' },
        exchange: 'NMS',
        regularMarketTime: 1614800586,
        volume24Hr: {},
        regularMarketDayHigh: { raw: 700.54, fmt: '700.54' },
        shortName: 'Tesla, Inc.',
        averageDailyVolume10Day: { raw: 38758014, fmt: '38.76M', longFmt: '38,758,014' },
        longName: 'Tesla, Inc.',
        regularMarketChange: { raw: -16.259888, fmt: '-16.26' },
        currencySymbol: '$',
        regularMarketPreviousClose: { raw: 686.44, fmt: '686.44' },
        preMarketPrice: { raw: 687.37, fmt: '687.37' },
        preMarketTime: 1614781799,
        exchangeDataDelayedBy: 0,
        toCurrency: null,
        postMarketChange: {},
        postMarketPrice: {},
        exchangeName: 'NasdaqGS',
        preMarketChange: { raw: 0.929993, fmt: '0.93' },
        circulatingSupply: {},
        regularMarketDayLow: { raw: 663.68, fmt: '663.68' },
        priceHint: { raw: 2, fmt: '2', longFmt: '2' },
        currency: 'USD',
        regularMarketPrice: { raw: 670.1801, fmt: '670.18' },
        regularMarketVolume: { raw: 21527389, fmt: '21.53M', longFmt: '21,527,389.00' },
        lastMarket: null,
        regularMarketSource: 'FREE_REALTIME',
        openInterest: {},
        marketState: 'REGULAR',
        underlyingSymbol: null,
        marketCap: { raw: 643275096064, fmt: '643.28B', longFmt: '643,275,096,064.00' },
        quoteType: 'EQUITY',
        preMarketChangePercent: { raw: 0.00135481, fmt: '0.14%' },
        volumeAllCurrencies: {},
        strikePrice: {},
        symbol: 'TSLA',
        preMarketSource: 'FREE_REALTIME',
        maxAge: 1,
        fromCurrency: null,
        regularMarketChangePercent: { raw: -0.023687268, fmt: '-2.37%' }
      }

    // var cost = trade.quantity * yapi.getQuote(trade.symbol).regularMarketPrice.raw;
    var cost = trade.quantity * testdata.regularMarketPrice.raw;
    console.log (cost);
    const db = require('../util/admin').admin.firestore();
    res.status(200).json({test:'test'})
}