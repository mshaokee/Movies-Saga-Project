import React, { Component } from 'react';
import { connect } from 'react-redux';


class Details extends Component {

    componentDidMount() {
        console.log('---------------Details mounted:');
        // this.props.dispatch({
        //     type: 'EDIT_MOVIES'
        // })
    };//end componentDidMount

    //if statement

    render() {

        return (
            <>
                <h1>Details</h1>
                {/* TEST WITH JSON */}
                {/* {JSON.stringify(this.props.reduxState.selectMovie)} */}
                <h1>NAME: {this.props.reduxState.selectMovie.title}</h1>
                <p>DESCRIPTION: {this.props.reduxState.selectMovie.description}</p>


            </>
        );//end return
    };//end render
};//end class



const putStateOnProps = reduxState => ({ reduxState });
//connect
export default connect(putStateOnProps)(Details);