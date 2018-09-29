import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import News from './components/News';
import Navbar from './components/CustomNavBar'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Helmet bodyAttributes={{style: 'background-color : #c0c0c0'}}/>
          <Navbar />
          <Route exact path = "/" component={Home} />
          <Route path = "/about" component={About} />
          <Route path = "/news" component={News} />
        </div>
      </Router>
    );
  }
}//

export default App;
