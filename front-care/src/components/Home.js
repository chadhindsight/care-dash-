import React, { Component } from 'react';
import actions from '../services';

class Home extends Component {
    // JUST A TEST TO BACKEND
   async componentDidMount() {
        let res = await actions.home()
        console.log(res)
    }
    render() {
        return (
            <div>
                Home Page
            </div>
        );
    }
}

export default Home;