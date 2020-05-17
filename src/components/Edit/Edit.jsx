import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Edit extends Component {

    state = {
        id: this.props.reduxState.selectMovie.id,
        title: this.props.reduxState.selectMovie.title,
        description: this.props.reduxState.selectMovie.description
    }

    componentDidMount() {
        console.log('Edit mounted');
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
        //send our updates to our saga
        this.props.dispatch({
            type: 'EDIT_MOVIES',
            payload: this.state
        })
        //this is to update our details 
        this.props.dispatch({
            type: 'current_movie',
            payload: this.state
        })
        //i want to update genres as well
        // this.props.dispatch({
        //     type: 'current_genres',
        //     payload: this.props.reduxState.selectGenres
        // })
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
                <Link to="/details"><button>CANCEL</button></Link>
                <Link to="/details"><button onClick={this.submit}>SUBMIT CHANGES</button></Link>
            </>
        );//end return
    };//end render
};//end class


const putStateOnProps = reduxState => ({ reduxState });
//connect
export default connect(putStateOnProps)(Edit);