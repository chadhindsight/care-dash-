import React, { Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import Home from './components/Home';
import Login from './components/user/Login'
import Profile from './components/user/Profile'
import Register from './components/user/Register'

class  App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
