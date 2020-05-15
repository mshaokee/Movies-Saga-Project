import React, { Component } from 'react';
import './App.css';
import {HashRouter, Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Header from '../Header/Header';

class App extends Component {

  componentDidMount(){
    console.log('App Mounted');
    
  };//end componentDidMount

  // Renders the entire app on the DOM
  render() {
    return (
      <>
      <HashRouter>
        <Header />
        {/* ROUTE MOVIES */}
        {/* <Route exact path="/" component={Home}/> */}

      </HashRouter>
      </>
    );//end return
  };//end render
};//end class

const putStateOnProps = reduxState => ({reduxState});

export default connect(putStateOnProps)(App);
