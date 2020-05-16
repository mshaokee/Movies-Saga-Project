import React, { Component } from 'react';
import { connect } from 'react-redux';

class Details extends Component {

    componentDidMount() {
        console.log('Details mounted:', this.props.reduxState.movies);
        this.props.dispatch({
            type: 'PUT_MOVIES'
        })
    };//end componentDidMount

    //if statement

    render() {

        return (
            <>
                <h1>Details</h1>
                <div>
                    {this.props.reduxState.movies.map((movie, index) => {
                        return (
                            <div>
                                <h1 key={index}>{movie.title}</h1>
                                <p key={index}>{movie.description}</p>
                            </div>
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