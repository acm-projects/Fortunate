import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";

import axios from "axios";
import { Link } from "react-router-dom";

// Material UI
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

import AppIcon from "../images/Fortunate_Logo.svg";

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
				localStorage.setItem(
					"FBIdToken",
					`Bearer ${response.data.token}`
				);
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
			<div>
				<iframe
					style={{
						position: "absolute",
						left: "50%",
						top: "50%",
						width: "99%",
						height: "99%",
						objectFit: "cover",
						transform: "translate(-50%, -50%)",
						zIndex: "-1",
					}}
					title="introBusinessEtEconomy"
					src="https://www.youtube.com/embed/nJ4O-ARAlRM?autoplay=1&mute=1&disablekb=1&modestbranding=1&rel=0&playlist=nJ4O-ARAlRM&loop=1&controls=0"
				/>
				<Grid container className={classes.form + " centered fullPage"}>
					<Grid item sm />
					<Grid item sm>
						<img
							src={AppIcon}
							alt="coin"
							width="150"
							height="150"
						/>
						<Typography
							variant="h3"
							className="title"
							align="center"
						>
							Signup
						</Typography>
						<form noValidate onSubmit={this.handleSubmit}>
							<TextField
								inputProps={{ style: { color: "gold" } }} // changes input color to gold
								InputLabelProps={{
									style: { color: "#fff" },
								}} // changes label color to white
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
								InputLabelProps={{
									style: { color: "#fff" },
								}} // changes label color to white
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
								InputLabelProps={{
									style: { color: "#fff" },
								}} // changes label color to white
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
								InputLabelProps={{
									style: { color: "#fff" },
								}} // changes label color to white
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
							<small style={{ color: "gold" }}>
								Already have an account? Login{" "}
								<Link to="/login" style={{ color: "#FFF" }}>
									here
								</Link>
							</small>
						</form>
					</Grid>
					<Grid item sm />
				</Grid>
			</div>
		);
	}
}

signup.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(signup);
