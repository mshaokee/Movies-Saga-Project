import React, { Component } from 'react';
import { connect } from 'react-redux';

class Details extends Component {

    componentDidMount() {
        console.log('Details mounted:');
        // this.props.dispatch({
        //     type: 'EDIT_MOVIES'
        // })
    };//end componentDidMount

    //if statement

    render() {

        return (
            <>
                <h1>Details</h1>
                <div>
                    {this.props.reduxState.movies.map((movie, index) => {
                        return (
                            <div key={ index }>
                                <h1>{movie.title}</h1>
                                <p>{movie.description}</p>
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