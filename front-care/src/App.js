import React, { Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import Home from './components/Home';
import Login from './components/user/Login'
import Profile from './components/user/Profile'
import SignUp from './components/user/SignUp'
import NavBar from './components/NavBar';
import Order from './components/Order'
import SearchBar from './components/search/SearchBar';
import ProductInfo from './components/search/ProductInfo';
import actions from './services/index';

class  App extends Component {
  state = {
    cart: [],
    currentProduct: {}
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
    // this.setState({ meds: results.data.meds})
    console.log(results)
    return results
  }
// Show information for a when a specific product is selected
  showInfo = (product) => { this.setState({ currentProduct: product})}

  addToCart = item => {
    let cart = [...this.state.cart]
    cart.push(item)
    this.setState({
        cart: cart 
     })
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">

        {JSON.stringify(this.state.results)}
        <NavBar  userSet={this.setUser} />
        <SearchBar getResults={this.getResults} showInfo={this.showInfo}/>
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} />} />
          <Route exact path="/login" render={(props) => <Login {...props} setUser={this.setUser} />} />
          <Route exact path="/" render={(props) => <Order {...props} cart={this.state.cart}/>} />
          <Route exact path="/signup" render={(props) => <SignUp {...props} setUser={this.setUser} />} />
          <Route exact path="/profile" render={(props) => <Profile {...props} profile={this.state} />} />
          <Route exact path="/product" render={(props) => <ProductInfo {...props} currentProduct={this.state.currentProduct} 
            addToCart={this.addToCart} />} /> 
        </Switch>
      </div>
    );
  }
}

export default App;
