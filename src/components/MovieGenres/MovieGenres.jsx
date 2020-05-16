import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieGenres extends Component {

    componentDidMount() {
        console.log('MovieGenres mounted');

    };//end componentDidMount

    render() {
        return (
            <>
                <li>{this.props.movieGenre.genrename}</li>
            </>
        );//end return
    };//end render
};//end class

// export default Genres;

// const putStateOnProps = reduxState => ({reduxState});
//connect
export default connect()(MovieGenres);