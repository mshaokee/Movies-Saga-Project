import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import './SpecificMovie.css';
class SpecificMovie extends Component {

    componentDidMount() {
        console.log('SpecificMovie mounted', this.props.reduxState.genres);
    };//end componentDidMount

    handleClick = () => {
        console.log('CLICKED');
        //send movies back to our saga interceptor
        this.props.dispatch({
            type: 'current_movie',
            payload: this.props.movie
        })
    };//end handleClick

    render() {
       
        return (
            <>
                {/* Display movie title, image poster, alt description */}
                <div className="movies">
                    <h3>{this.props.movie.title}</h3>
                    <div className="poster">
                    <Link to="/details"><img
                        onClick={this.handleClick}
                        src={this.props.movie.poster}
                        alt={this.props.movie.description}/>
                    </Link>
                    <div className="edit">EDIT</div>
                    </div>
                    <p>{this.props.movie.description}</p>
                </div>
                
            </>
        );//end return
    };//end render
};//end class

//needed to display and connect to redux
const putStateOnProps = reduxState => ({ reduxState });
//connect
export default connect(putStateOnProps)(SpecificMovie);