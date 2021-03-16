import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Helmet } from "react-helmet";
import jwtDecode from "jwt-decode";
import AuthRoute from "./util/AuthRoute";

import Header from './components/Header'
import Footer from './components/Footer'

/// Pages
import login from "./pages/login";
import signup from "./pages/signup";
import home from './pages/home';
import portfolio from './pages/portfolio';

// Log-in check
//let authenticated;
const token = localStorage.FBIdToken;
if (token) {
	//let decodedToken = jwtDecode(token);
	console.log(token);
	// if (decodedToken.exp * 1000 < Date.now()) {
	// 	window.location.href = "/login";
	// }
}

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
					<div className="container">
						<Switch>
              <Route exact path="/" component={home}/>
							<Route exact path="/login" component={login} />
							<Route exact path="/signup" component={signup} />
              <Route exact path="/portfolio" component={portfolio} />
						</Switch>
					</div>
          <Footer/>
				</Router>
			</div>
		);
	}
}

export default App;
