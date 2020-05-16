import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class SpecificMovie extends Component {

    componentDidMount() {
        console.log('SpecificMovie mounted');
    };//end componentDidMount

    render() {
        return (
            <>
                {/* Display movie title, image poster, alt description */}
                <div>
                    <h3>{this.props.movie.title}</h3>
                    <Link to="/details"><img
                        src={this.props.movie.poster}
                        alt={this.props.movie.description}>
                    </img></Link>
                    <p>{this.props.movie.description}</p>
                </div>
            </>
        );//end return
    };//end render
};//end class

export default SpecificMovie;