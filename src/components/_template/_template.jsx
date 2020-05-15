import React, { Component } from 'react';
// import { connect } from 'react-redux';

class NAME extends Component {

    componentDidMount() {
        console.log('NAME mounted');

    };//end componentDidMount

    render() {
        return (
            <>
                <h1>NAME</h1>
            </>
        );//end return
    };//end render
};//end class

export default NAME;

// const putStateOnProps = reduxState => ({reduxState});
//connect
// export default connect()(NAME);