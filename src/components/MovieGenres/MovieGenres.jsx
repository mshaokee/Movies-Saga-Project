import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieGenres extends Component {

    componentDidMount() {
        console.log('MovieGenres mounted', this.props.movieGenre);
    };//end componentDidMount


    render() {
        //set empty variable to display as a list for genres
        let specificGenre;

        //if statement to set connect titles between both reducers
        if (this.props.movieGenre.title === this.props.reduxState.selectMovie.title) {
            specificGenre = (
                <li>{this.props.movieGenre.genrename}</li>
            )
        };//end if statement

        return (
            <div>
                {specificGenre}
            </div>
        );//end return
    };//end render
};//end class


const putStateOnProps = reduxState => ({ reduxState });
//connect
export default connect(putStateOnProps)(MovieGenres);