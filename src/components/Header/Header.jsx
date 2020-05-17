import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {

    componentDidMount() {
        console.log('Header mounted');
    };//end componentDidMount

    // checkRedux = () => {
    //     console.log('current reduxState:', this.props.reduxState);
    // };//end checkRedux

    render() {
        return (
            <div>
                <h1>BLOCKBUSTER 2.0</h1>
                {/* <button onClick={this.checkRedux}>Check Redux</button> */}
            </div>
        );//end return
    };//end render
};//end class

// export default Header;

const putStateOnProps = reduxState => ({ reduxState });
//connect
export default connect(putStateOnProps)(Header);