const config = require("../util/config");

const firebase = require("firebase");
firebase.initializeApp(config);

const { validateLoginData } = require("../util/validators");

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
