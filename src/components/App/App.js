import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import Admin from '../Admin/Admin'
import Portfolio from '../Portfolio/Portfolio'
class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <Router>
          <div>
         
            <Route exact path="/" component={Portfolio} />
            <Route exact path="/admin" component={Admin} />
           
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
