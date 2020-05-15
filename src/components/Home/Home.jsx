import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
// import { connect } from 'react-redux';

class Home extends Component {

    componentDidMount() {
        console.log('Home mounted');

    };//end componentDidMount

    render() {
        return (
            <>
            {/* DISPLAY IMAGE / DESCRIPTION / IMAGE WILL LINK TO DETAILS */}
                <h1>Home</h1>
            </>
        );//end return
    };//end render
};//end class

export default Home;

// const putStateOnProps = reduxState => ({reduxState});
//connect
// export default connect()(Home);