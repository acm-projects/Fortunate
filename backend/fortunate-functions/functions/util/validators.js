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

// Checks if the given user credentials are non-empty and passes the appropriate errors
exports.validateLoginData = user => {
	let errors = {};

<<<<<<< HEAD
	if (isEmpty(user.email)) errors.email = "Feild must not be empty";
	if (isEmpty(user.password)) errors.password = "Feild must not be empty";
=======
	if (isEmpty(user.email)) errors.email = "Field must not be empty";
	if (isEmpty(user.password)) errors.password = "Field must not be empty";
>>>>>>> sign_up

	return {
		valid: Object.keys(errors).length === 0,
		errors,
	};
};
<<<<<<< HEAD
=======

exports.validateSignUpData = user => {
	let errors = {};
    if(!isEmail(user.email)) {
		errors.email = "Please enter a valid email address"
	}
	if(isEmpty(user.password)) {
		errors.password = "Field must not be empty"
	} else if (user.password !== user.confirm_password) {
        errors.confirm_password = 'Passwords do not match';
    }
    if(isEmpty(user.username)) {
        errors.username = 'Field not be empty';
    }
    return {
		valid: Object.keys(errors).length === 0,
		errors
	};
};
>>>>>>> sign_up
