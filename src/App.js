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
      <div className="bg-lightCream px-6 pt-2 pb-20 md:px-10 md:pt-10 lg:px-20 lg:pt-11 lg:pb-24">
      <Navigation/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/subscribe" component={Subscribe}/>
      </Switch>
      <Footer/>
      </div>
    </Router>
  );
}

export default App;
