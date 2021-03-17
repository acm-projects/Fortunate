import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

// Components
import Navbar from './components/Navbar';

// Pages
  // can add home here
// import Header from './components/Header'
import login from './pages/login';
import signup from './pages/signup';

const theme = createMuiTheme({
  palette: {
    primary: {
       main: '#515b5f',
    },
    secondary: {
      main: '#ffb300',
    },
  },
})

class App extends Component {
  render() {
    return (
    <MuiThemeProvider theme={theme}>
      <div className="App">

        // can add home here

        <Router>
// navbar doesn't change just the content of page changes so not under switch
      <Navbar/>
          <div className="container">
            <Switch>
              <Route exact path="/login" component={login}/>
              <Route exact path="/signup" component={signup}/>
            </Switch>
          </div>
        </Router>
      </div>
    </MuiThemeProvider>
    );
  }
}

export default App;
