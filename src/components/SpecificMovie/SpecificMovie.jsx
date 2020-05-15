import React, { Component } from 'react';

class SpecificMovie extends Component {

    componentDidMount() {
        console.log('SpecificMovie mounted', this.props.movie);

    };//end componentDidMount

    render() {
        return (
            <>
                {/* Display movie title, image poster, alt description */}
                <div>
                    <h3>{this.props.movie.title}</h3>
                    <img src={this.props.movie.poster} alt={this.props.movie.description}></img>
                    <p>{this.props.movie.description}</p>
                </div>
            </>
        );//end return
    };//end render
};//end class

export default SpecificMovie;