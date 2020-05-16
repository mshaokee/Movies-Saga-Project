import React, { Component } from 'react';
import { connect } from 'react-redux';

class Edit extends Component {

    state = {
        title: this.props.reduxState.selectMovie.title,
        description: this.props.reduxState.selectMovie.description
    }

    componentDidMount() {
        console.log('Edit mounted', this.props.reduxState.selectMovie);
    };//end componentDidMount

    changeTitle = (event) => {
        console.log('in Edit changeTitle');
        this.setState({
            title: event.target.value
        })
    };//end changeTitle

    changeDesc = (event) => {
        console.log('in Edit changeDesc');
        this.setState({
            description: event.target.value
        })
    };//end changeDesc

    render() {
        return (
            <>
                {/* TEST INPUT CHANGES */}
                {JSON.stringify(this.state.title)};
                {JSON.stringify(this.state.description)};
                <div>
                    <input onChange={this.changeTitle}
                        type="text"
                        defaultValue={this.props.reduxState.selectMovie.title}
                    />
                </div>
                <div>
                    <input onChange={this.changeDesc}
                        type="text"
                        defaultValue={this.props.reduxState.selectMovie.description}
                    />
                </div>
            </>
        );//end return
    };//end render
};//end class


const putStateOnProps = reduxState => ({ reduxState });
//connect
export default connect(putStateOnProps)(Edit);