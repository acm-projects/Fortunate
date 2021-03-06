import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

// Components
import Navbar from './components/Navbar';

// Pages
  // can add home here
import login from './pages/login';
import signup from './pages/signup';
/*
const theme = createMuiTheme({
  palette: {
   primary: {
     main: '#ad1457',
     contrastText: '#fff'
   },
   secondary: {
     main: '#ffab00',
     contrastText: '#fff'
   }
 },
})*/

class App extends Component {
  render() {
//function App() {
    return (
    //  <MuiThemeProvider theme={theme}>
      <div className="App">
        <Router>
// navbar doesn't change just the content of page changes so not under switch
        <Navbar/>
        // can add home here
          <div className="container">
            <Switch>
              <Route exact path="/login" component={login}/>
              <Route exact path="/signup" component={signup}/>
            </Switch>
          </div>
        </Router>
      </div>
    //  </MuiThemeProvider>
    );
  }
}

export default App;
