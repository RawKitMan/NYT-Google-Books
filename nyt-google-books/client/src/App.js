import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Saved from "./components/Saved";
import Search from "./components/Search";
import Nav from "./components/Nav";
import './App.css';

class App extends Component {
  render() {
    return (

      <div className="container">
        <Nav />
        <br />
        <Router>
          <Route path="/" exact component={Search} />
          <Route path="/search" component={Search} />
          <Route path="/saved" component={Saved} />
        </Router>
      </div>
    );
  };
};
export default App;
