import React, { Component } from 'react';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Details from '../Details/Details';
import Edit from '../Edit/Edit';

class App extends Component {

  componentDidMount() {
    console.log('App Mounted');

  };//end componentDidMount

  // Renders the entire app on the DOM
  render() {
    return (
      <>
        <HashRouter>
          <Header />
          {/* ROUTE MOVIES */}
          <Route exact path="/" component={Home} />
          <Route path="/details" component={Details} />
          <Route path="/edit" component={Edit} />
        </HashRouter>
      </>
    );//end return
  };//end render
};//end class

const putStateOnProps = reduxState => ({ reduxState });

export default connect(putStateOnProps)(App);
