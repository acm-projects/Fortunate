import React, { Component } from "react";
import Link from "react-router-dom/Link";

// Material UI
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";

class Navbar extends Component {
	render() {
		return (
			<AppBar>
				<Toolbar className="nav-container">
					<Button color="inherit" component={Link} to="/">
						Home
					</Button>
					<Button color="inherit" component={Link} to="/login">
						Login
					</Button>
					<Button color="inherit" component={Link} to="/signup">
						Signup
					</Button>
				</Toolbar>
			</AppBar>
		);
	}
}

export default Navbar;
