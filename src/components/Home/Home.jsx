import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

class Home extends Component {

    componentDidMount() {
        console.log('Home mounted');
        //display database images and description from redux-saga
        this.props.dispatch({
            type: 'GET_MOVIES'
        });
    };//end componentDidMount

    render() {
        return (
            <>
            {/* DISPLAY IMAGE / DESCRIPTION / IMAGE WILL LINK TO DETAILS */}
                <h1>Home</h1>
                <p>{JSON.stringify(this.props.reduxState)}</p>
            </>
        );//end return
    };//end render
};//end class

//need reduxState to display on DOM
const putStateOnProps = reduxState => ({reduxState});
//connect
export default connect(putStateOnProps)(Home);