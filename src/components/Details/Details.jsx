import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import MovieGenres from '../MovieGenres/MovieGenres';


class Details extends Component {

    componentDidMount() {
        console.log('---------------Details mounted');
        //send data to our reducer that holds previous data
        this.props.dispatch({
            type: 'current_genres',
            payload: this.props.reduxState.genres
        })
    };//end componentDidMount


    render() {

        return (
            <>
                {/* <h1>Details</h1> */}
                {/* TEST WITH JSON */}
                {/* {JSON.stringify(this.props.reduxState.selectMovie)} */}
                {/* {JSON.stringify(this.props.reduxState.genres)} */}

                <h1>Title of Movie: {this.props.reduxState.selectMovie.title}</h1>
                <p>DESCRIPTION: {this.props.reduxState.selectMovie.description}</p>
                <Link to="/"><button>Back to Movie List</button></Link>
                <Link to="/edit"><button>Edit</button></Link>
                <div>
                    {/* Loop through genres to display specific genres per movie */}
                    <p>GENRES:</p> {this.props.reduxState.genres.map((genre, index) => {
                        return (
                            <ul key={index}>
                                <MovieGenres movieGenre={genre} />
                            </ul>
                        )
                    })}
                </div>
            </>
        );//end return
    };//end render
};//end class



const putStateOnProps = reduxState => ({ reduxState });
//connect
export default connect(putStateOnProps)(Details);