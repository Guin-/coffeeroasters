import './App.css';
import {
        BrowserRouter as Router,
        Switch,
        Route,
} from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Subscribe from './components/Subscribe';

function App() {
  return (
    <Router>
      <Navigation/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/subscribe" component={Subscribe}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
