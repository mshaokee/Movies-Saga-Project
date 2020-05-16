import React, { Component } from 'react';
import { connect } from 'react-redux';

class Edit extends Component {

    state = {
        id: this.props.reduxState.selectMovie.id,
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

    submit = () => {
        console.log('Submitting from Edit');
        this.props.dispatch({
            type: 'EDIT_MOVIES',
            payload: this.state
        })
    };//end submit

    render() {
        return (
            <>
                {/* TEST INPUT CHANGES */}
                {JSON.stringify(this.state.title)}
                <div>
                {JSON.stringify(this.state.description)}
                </div>
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
                <button onClick={this.submit}>SUBMIT CHANGES</button>
            </>
        );//end return
    };//end render
};//end class


const putStateOnProps = reduxState => ({ reduxState });
//connect
export default connect(putStateOnProps)(Edit);