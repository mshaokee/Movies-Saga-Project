import React, {Component} from 'react';
// import { connect } from 'react-redux';

class Header extends Component {

    componentDidMount(){
        console.log('Header mounted');
        
    };//end componentDidMount

    render(){
        return(
            <div>
            <h1>THE MOVIES</h1>
            </div>
        );//end return
    };//end render
};//end class

export default Header;

// const putStateOnProps = reduxState => ({reduxState});
//connect
// export default connect()(Header);