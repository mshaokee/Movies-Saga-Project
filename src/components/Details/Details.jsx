import React, { Component } from 'react';
// import { connect } from 'react-redux';

class Details extends Component {

    componentDidMount() {
        console.log('Details mounted');

    };//end componentDidMount

    render() {
        return (
            <>
                <h1>Details</h1>
            </>
        );//end return
    };//end render
};//end class

export default Details;

// const putStateOnProps = reduxState => ({reduxState});
//connect
// export default connect()(Details);