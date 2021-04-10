import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createMuiTheme, ThemeProvider} from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#404040'
  },
    secondary: {
      main: '#2d313a'
    },
  background: {paper: '#616161'},
}

})

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>

  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
