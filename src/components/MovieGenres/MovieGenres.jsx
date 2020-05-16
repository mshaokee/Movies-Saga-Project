import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieGenres extends Component {

    componentDidMount() {
        console.log('MovieGenres mounted');

    };//end componentDidMount

    render() {
        return (
            <>
                <h1>MovieGenres</h1>
            </>
        );//end return
    };//end render
};//end class

// export default Genres;

// const putStateOnProps = reduxState => ({reduxState});
//connect
export default connect()(MovieGenres);