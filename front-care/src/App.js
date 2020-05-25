import React, { Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import Home from './components/Home';
import Login from './components/user/Login'
import Profile from './components/user/Profile'
import Register from './components/user/Register'

class  App extends Component {
  state = {
    
  }

  setUser = (user) => this.setState(user)
  
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} />} />
          <Route exact path="/login" render={(props) => <Login {...props} />} />
          <Route exact path="/register" render={(props) => <Register {...props} setUser={this.setUser} />} />
          <Route exact path="/profile" render={(props) => <Profile {...props} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
