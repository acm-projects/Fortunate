import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Helmet } from "react-helmet";
import jwtDecode from "jwt-decode";
import AuthRoute from "./util/AuthRoute";

import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import login from "./pages/login";
import signup from "./pages/signup";
import home from "./pages/home";
import portfolio from "./pages/portfolio";

// TODO: Authenticate Log-in with jwt-decode and AuthRoute

class App extends Component {
	render() {
		return (
			<div className="App">
				<Helmet>
					<style>{"body {background-color: #424242;}"}</style> // #fff
					- white #424242-grey #ffab00 -yellowish
				</Helmet>

				<Router>
					<Header />
					<div>
						<Switch>
							<Route exact path="/" component={home} />
							<Route exact path="/login" component={login} />
							<Route exact path="/signup" component={signup} />
							<Route
								exact
								path="/portfolio"
								component={portfolio}
							/>
						</Switch>
					</div>
					<Footer />
				</Router>
			</div>
		);
	}
}

export default App;
