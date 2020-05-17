import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core'
import './Edit.css';

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
            <div className="container">
                {/* TEST INPUT CHANGES */}
                <div className="title">
                    {JSON.stringify(this.state.title)}
                    <div>
                        {JSON.stringify(this.state.description)}
                    </div>
                </div>
                <div>
                    <input onChange={this.changeTitle}
                        className="input1"
                        type="text"
                        defaultValue={this.props.reduxState.selectMovie.title}
                    />
                </div>
                <div>
                    <textarea onChange={this.changeDesc}
                        className="input2"
                        type="text"
                        defaultValue={this.props.reduxState.selectMovie.description}
                    />
                </div>
                <Link to="/details"><Button>CANCEL</Button></Link>
                <Link to="/details"><Button onClick={this.submit}>SUBMIT CHANGES</Button></Link>
            </div>
        );//end return
    };//end render
};//end class


const putStateOnProps = reduxState => ({ reduxState });
//connect
export default connect(putStateOnProps)(Edit);