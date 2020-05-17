import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieGenres extends Component {

    componentDidMount() {
        console.log('MovieGenres mounted');
        // this.props.dispatch({
        //     type: 'current_genres',
        //     payload: this.props.movieGenre
        // })
    };//end componentDidMount

    render() {
        return (
            <>
                <li>{this.props.reduxState.selectGenres.genrename}</li>
            </>
        );//end return
    };//end render
};//end class


const putStateOnProps = reduxState => ({reduxState});
//connect
export default connect(putStateOnProps)(MovieGenres);