// Checks if the given string is formatted as a proper email
const isEmail = email => {
	const emailMatch = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (email.match(emailMatch)) return true;
	return false;
};

// Checks if the given string is empty
const isEmpty = str => {
	if (str.trim() === "") return true;
	else return false;
};

// Checks if the given user credentials are non-empty then passes the appropriate errors
exports.validateLoginData = user => {
	let errors = {};

	if (isEmpty(user.email)) errors.email = "Field must not be empty";
	if (isEmpty(user.password)) errors.password = "Field must not be empty";

	return {
		valid: Object.keys(errors).length === 0,
		errors,
	};
};

// Checks if the given user credentials are non-empty and valid then passes the appropriate errors
exports.validateSignUpData = user => {
	let errors = {};

	if (isEmpty(user.username)) errors.username = "Field must not be empty";
	if (isEmpty(user.email)) errors.email = "Field must not be empty";
	else if (!isEmail(user.email))
		errors.email = "Please enter a valid email address";
	if (isEmpty(user.password)) errors.password = "Field must not be empty";
	else if (user.password !== user.confirmPassword)
		errors.confirmPassword = "Passwords do not match";

	return {
		valid: Object.keys(errors).length === 0,
		errors,
	};
};
