
//import Header from '../components/Header'
import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import AppIcon from '../images/fortunatelogo.png';
import axios from 'axios';
import { Link } from 'react-router-dom';
// MUi stuff
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = {
	form: {
		textAlign: "center",
	},
	pageTitle: {
		margin: "10px auto 10px auto",
	},
	textField: {
		margin: "10px auto 10px auto",
	},
	button: {
		marginTop: 20,
		position: "relative",
	},
	customError: {
		color: "red",
		fontSize: "0.8rem",
		marginTop: 10,
	},
	progress: {
		position: "absolute",
	},
};

class signup extends Component {
	constructor() {
		super();
		this.state = {
			username: "",
			email: "",
			password: "",
			comfirmPassword: "",
			loading: false,
			errors: {},
		};
	}

	handleSubmit = event => {
		event.preventDefault();
		this.setState({
			loading: true,
		});

		const newUserData = {
			username: this.state.username,
			email: this.state.email,
			password: this.state.password,
			confirmPassword: this.state.confirmPassword,
		};

		axios
			.post("/signup", newUserData)
			.then(response => {
				console.log(response.data);
				localStorage.setItem("FBIdToken", "Bearer ${res.data.token}"); // What this do
				this.setState({
					loading: false,
				});
				this.props.history.push("/");
			})
			.catch(err => {
				this.setState({
					errors: err.response.data,
					loading: false,
				});
			});
	};

	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	render() {
		const { classes } = this.props;
		const { errors, loading } = this.state;
		return (
			<Grid container className={classes.form}>
				<Grid item sm />
				<Grid item sm>
					<img src={AppIcon} alt="coin" width="100" height="100" />
					<Typography
						variant="h3"
						className={"title" /* + classes.pagetitle*/}
					>
						Signup
					</Typography>
					<form noValidate onSubmit={this.handleSubmit}>
						<TextField
							inputProps={{ style: { color: "gold" } }} // changes input color to gold
							InputLabelProps={{ style: { color: "#fff" } }} // changes label color to white
							id="username"
							name="username"
							type="username"
							label="Username"
							className={classes.textField}
							helperText={errors.username}
							error={errors.username ? true : false}
							value={this.state.username}
							onChange={this.handleChange}
							fullWidth
						/>

						<TextField
							inputProps={{ style: { color: "gold" } }} // changes input color to gold
							InputLabelProps={{ style: { color: "#fff" } }} // changes label color to white
							id="email"
							name="email"
							type="email"
							label="Email"
							className={classes.textField}
							helperText={errors.email}
							error={errors.email ? true : false}
							value={this.state.email}
							onChange={this.handleChange}
							fullWidth
						/>

						<TextField
							inputProps={{ style: { color: "gold" } }} // changes input color to gold
							InputLabelProps={{ style: { color: "#fff" } }} // changes label color to white
							id="password"
							name="password"
							type="password"
							label="Password"
							className={classes.textField}
							helperText={errors.password}
							error={errors.password ? true : false}
							value={this.state.password}
							onChange={this.handleChange}
							fullWidth
						/>

						<TextField
							inputProps={{ style: { color: "gold" } }} // changes input color to gold
							InputLabelProps={{ style: { color: "#fff" } }} // changes label color to white
							id="confirmPassword"
							name="confirmPassword"
							type="password"
							label="Confirm Password"
							className={classes.textField}
							helperText={errors.confirmPassword}
							error={errors.confirmPassword ? true : false}
							value={this.state.confirmPassword}
							onChange={this.handleChange}
							fullWidth
						/>
						{errors.general && (
							<Typography
								variant="body2"
								className={classes.customError}
							>
								{errors.general}
							</Typography>
						)}
						<Button
							type="submit"
							variant="contained"
							color="primary"
							className={classes.button}
							disabled={loading}
						>
							Signup
							{loading && (
								<CircularProgress
									size={30}
									className={classes.progress}
								/>
							)}
						</Button>
						<br />
						<small style={{ color: 'gold' }}>
							Already have an account? Login{" "}
							<Link to="/login" style={{ color: "#FFF" }}>
								here
							</Link>
						</small>
					</form>
				</Grid>
				<Grid item sm />
			</Grid>
		);
	}
}

signup.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(signup);
