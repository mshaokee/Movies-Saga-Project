import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
//import pages to route through
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
        <BrowserRouter>
          <Header />
          {/* ROUTE MOVIES */}
          <Route exact path="/" component={Home} />
          <Route path="/details" component={Details} />
          <Route path="/edit" component={Edit} />
        </BrowserRouter>
      </>
    );//end return
  };//end render
};//end class

//connect to redux
export default connect()(App);
