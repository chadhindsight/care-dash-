import React, { Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import Home from './components/Home';
import Login from './components/user/Login'
import Profile from './components/user/Profile'
import SignUp from './components/user/SignUp'
import NavBar from './components/NavBar';
import SearchBar from './components/search/SearchBar';
import SearchResults from './components/search/SearchResults'
import actions from './services/index';

class  App extends Component {
  state = {
    cart: []
  }

  setUser = (user) => this.setState(user)

  //The methods handling state stuff
  async componentDidMount() {
    let user = await actions.isLoggedIn()
    console.log(user)
    this.setState({ ...user.data })
  }
  
  getResults = async term => {
    let results = await actions.search(term)
    console.log(results)
  }

  addToCart = item => this.setState({
    carts: this.state.carts.push(item)
  })

  render() {
    console.log(this.state.results)
    return (
      <div className="App">

        {JSON.stringify(this.state.results)}
        <NavBar  userSet={this.setUser} />
        <SearchBar getResults={this.getResults} />
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} />} />
          <Route exact path="/login" render={(props) => <Login {...props} setUser={this.setUser} />} />
          <Route exact path="/search" render={(props) => <SearchResults {...props} results={this.state.results} 
            addToCart={this.addToCart}/>} />
          <Route exact path="/signup" render={(props) => <SignUp {...props} setUser={this.setUser} />} />
          <Route exact path="/profile" render={(props) => <Profile {...props} profile={this.state} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
