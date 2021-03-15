import Header from './components/Header'
import BodyContainer from './components/BodyContainer'
import BodyContainer2 from './components/BodyContainer2'
import BodyContainer3 from './components/BodyContainer3'
import BodyContainer4 from './components/BodyContainer4'
import BodyContainer5 from './components/BodyContainer5'
import Footer from './components/Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home'


function App() {
  return (
    <div className="container">
      <Header />
            <Router>
        <Switch>
        <Route exact path="/" component={Home}/>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
