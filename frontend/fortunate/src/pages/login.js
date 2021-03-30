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

import AppIcon from "../images/fortunatelogo.png";

const styles = {
	form: {
		textAlign: "center",
	},
	image: {
		margin: "20px auto 20px auto",
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

class login extends Component {
	constructor() {
		super();
		this.state = {
			email: "",
			password: "",
			loading: false,
			errors: {},
		};
	}
	handleSubmit = event => {
		event.preventDefault();
		this.setState({
			loading: true,
		});
		const userData = {
			email: this.state.email,
			password: this.state.password,
		};
		axios
			.post("/login", userData)
			.then(res => {
				console.log(res.data);

				localStorage.setItem("FBIdToken", "Bearer ${res.data.token}");

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
					<img src={AppIcon} alt="coin" width="200" height="200" />

					<Typography
						variant="h3"
						className={classes.pagetitle}
						style={{ color: "gold" }}
					>
						Login
					</Typography>
					<form noValidate onsubmit={this.handleSubmit}>
						<TextField
							inputProps={{ style: { color: "gold" } }}
							InputLabelProps={{ style: { color: "#fff" } }}
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
							inputProps={{ style: { color: "gold" } }}
							InputLabelProps={{ style: { color: "#fff" } }}
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
							Login
							{loading && (
								<CircularProgress
									size={30}
									className={classes.progress}
								/>
							)}
						</Button>
						<br />

						<small style={{ color: "gold" }}>
							Don't have account? Sign-up{" "}
							<Link to="/signup" style={{ color: "#FFF" }}>
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

login.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(login);
