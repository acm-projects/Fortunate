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
import dictionary from "./pages/dictionary";
import introduction from "./pages/lessons/introduction";
import trading from "./pages/lessons/trading";
import vmpage from "./pages/stockPage/vmpage";

import axios from "axios";

const token = localStorage.FBIdToken;
if (token) {
	axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

axios.defaults.headers.common["Accept"] = "application/json";

// TODO: Authenticate Log-in with jwt-decode and AuthRoute

class App extends Component {
	render() {
		return (
			<div className="App">
				<link rel="shortcut icon" href="./images/favicon.ico" />
				<Helmet>
					<style>{"body {background-color: #424242;}"}</style> // #fff
					- white #424242-grey #ffab00 -yellowish
				</Helmet>

				<Router>
					<Header />
					<div className = "content">
						<Switch>
							<Route exact path="/" component={home} />
							<Route exact path="/login" component={login} />
							<Route exact path="/signup" component={signup} />
							<Route
								exact
								path="/portfolio"
								component={portfolio}
							/>
							<Route
								exact
								path="/dictionary"
								component={dictionary}
							/>
							<Route
								exact
								path="/learn/intro"
								component={introduction}
							/>
							<Route
								exact
								path="/learn/trading"
								component={trading}
							/>
							<Route exact path="/vmpage" component={vmpage} />
						</Switch>
					</div>
					<Footer></Footer>
				</Router>
			</div>
		);
	}
}

export default App;
