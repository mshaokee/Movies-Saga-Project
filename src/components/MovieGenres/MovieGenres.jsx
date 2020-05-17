import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieGenres extends Component {

    componentDidMount() {
        console.log('MovieGenres mounted');
    };//end componentDidMount


    render() {
        //set empty variable to display as a list for genres
        let specificGenre;

        //if statement to set connect titles between both reducers to display title/desc
        if (this.props.movieGenre.title === this.props.reduxState.selectMovie.title) {
            specificGenre = (
                <li>{this.props.movieGenre.genrename}</li>
            )
        } //secondary if statement to get the genres to redisplay
        else if (this.props.movieGenre.movieid === this.props.reduxState.selectMovie.id){
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


//connect to reduxState and display on DOM
const putStateOnProps = reduxState => ({ reduxState });
//connect
export default connect(putStateOnProps)(MovieGenres);