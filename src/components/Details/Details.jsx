import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class Details extends Component {

    componentDidMount() {
        console.log('---------------Details mounted:');
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
                <Link to="/"><button>Back to Movie List</button></Link>
                <Link to="/edit"><button>Edit</button></Link>
            </>
        );//end return
    };//end render
};//end class



const putStateOnProps = reduxState => ({ reduxState });
//connect
export default connect(putStateOnProps)(Details);