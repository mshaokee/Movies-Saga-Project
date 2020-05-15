import React, { Component } from 'react';
// import { connect } from 'react-redux';

class Edit extends Component {

    componentDidMount() {
        console.log('Edit mounted');

    };//end componentDidMount

    render() {
        return (
            <>
                <h1>Edit</h1>
            </>
        );//end return
    };//end render
};//end class

export default Edit;

// const putStateOnProps = reduxState => ({reduxState});
//connect
// export default connect()(Edit);