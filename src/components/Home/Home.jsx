import React, { Component } from 'react';
import { connect } from 'react-redux';
import SpecificMovie from '../SpecificMovie/SpecificMovie';

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
                {/* Map through images */}
                {/* DISPLAY IMAGE / DESCRIPTION / TITLE / IMAGE WILL LINK TO DETAILS */}
                <h1>Home</h1>
                {this.props.reduxState.movies.map((movie, index) =>
                    <div key={index}>
                        <SpecificMovie movie={movie} />
                    </div>
                )};
            </>
        );//end return
    };//end render
};//end class

//need reduxState to display on DOM
const putStateOnProps = reduxState => ({ reduxState });
//connect
export default connect(putStateOnProps)(Home);