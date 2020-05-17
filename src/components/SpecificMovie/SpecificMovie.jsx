import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
class SpecificMovie extends Component {

    componentDidMount() {
        console.log('SpecificMovie mounted', this.props.reduxState.genres);
    };//end componentDidMount

    handleClick = () => {
        console.log('CLICKED');
        this.props.dispatch({
            type: 'current_movie',
            payload: this.props.movie
        })
    };//end handleClick

    render() {
       
        return (
            <>
                {/* Display movie title, image poster, alt description */}
                <div>
                    <h3>{this.props.movie.title}</h3>
                    <Link to="/details"><img
                        onClick={this.handleClick}
                        src={this.props.movie.poster}
                        alt={this.props.movie.description}/>
                    </Link>
                    <p>{this.props.movie.description}</p>
                </div>
                
            </>
        );//end return
    };//end render
};//end class

const putStateOnProps = reduxState => ({ reduxState });
//connect
export default connect(putStateOnProps)(SpecificMovie);