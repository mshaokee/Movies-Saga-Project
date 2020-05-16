import React, { Component } from 'react';
import { connect } from 'react-redux';

class Edit extends Component {

    componentDidMount() {
        console.log('Edit mounted', this.props.reduxState.selectMovie);
    };//end componentDidMount

    render() {
        return (
            <>
                <div>
                    <input type="text" placeholder={this.props.reduxState.selectMovie.title}/>
                </div>
                <div>
                    <input type="text" placeholder={this.props.reduxState.selectMovie.description} />
                </div>

            </>
        );//end return
    };//end render
};//end class


const putStateOnProps = reduxState => ({ reduxState });
//connect
export default connect(putStateOnProps)(Edit);