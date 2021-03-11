import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Helmet } from "react-helmet";
import jwtDecode from "jwt-decode";
import AuthRoute from "./util/AuthRoute";

// MUI stuff
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

import Header from "./components/Header";
/*
 import BodyContainer from './components/BodyContainer'
 import BodyContainer2 from './components/BodyContainer2'
 import BodyContainer3 from './components/BodyContainer3'
 import BodyContainer4 from './components/BodyContainer4'
 import BodyContainer5 from './components/BodyContainer5'
 import Footer from './components/Footer'

*/
// components
// import Navbar from './components/Navbar';

/// Pages
//import home from './pages/home';
import login from "./pages/login";
import signup from "./pages/signup";

/*
const theme = createMuiTheme ({
  palette:{

  },
});
*/
/*  //////////////////////////////////////// once signed in no sign in available
let authenticated;
const token = localStorage.FBIdToken;
if(token){
  const decodedToken = jwtDecode(token);
  if(decodedToken.exp * 1000 < Data.now()){
  window.location.href = '/login'
  authenticated = false; // timed out
  } else {
  authenticated = true;
  }
}*/
// in line 57 58
//  <AuthRoute exact path="/login" component={login} authenticated={authenticated}/>
//  <AuthRoute exact path="/signup" component={signup} authenticated={authenticated}/>
//line 74

// components for a single page
/*<Header />
  <BodyContainer />
  <BodyContainer2 />
  <BodyContainer3 />
  <BodyContainer4 />
  <BodyContainer5 />
  <Footer /> */

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
							<Route exact path="/login" component={login} />
							<Route exact path="/signup" component={signup} />
						</Switch>
					</div>
				</Router>
			</div>
		);
	}
}
export default App;
