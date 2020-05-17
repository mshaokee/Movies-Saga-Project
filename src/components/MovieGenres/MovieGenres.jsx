import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieGenres extends Component {

    componentDidMount() {
        console.log('MovieGenres mounted', this.props.movieGenre);
    };//end componentDidMount

    //if statement if this.props.reduxState.movie title = movietitle

    render() {
        let specificGenre;

        if(this.props.movieGenre.title === this.props.reduxState.selectMovie.title){
            specificGenre = (
                <li>{this.props.movieGenre.genrename}</li>
            )
        }

        return (
            <>
                {specificGenre}
            </>
        );//end return
    };//end render
};//end class


const putStateOnProps = reduxState => ({reduxState});
//connect
export default connect(putStateOnProps)(MovieGenres);