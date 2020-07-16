import React, { Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import Home from './components/Home';
import Login from './components/user/Login'
import Profile from './components/user/Profile'
import SignUp from './components/user/SignUp'
import Navbar from './components/NavBar';
import Order from './components/Order';
import ProductInfo from './components/search/ProductInfo';
import Footer from './components/Footer';
import About from './components/About';

import actions from './services/index';

class  App extends Component {
  state = {
    cart: [],
    currentProduct: {},
    medications: null,
  }

   displayRankedMeds = async ()=> {
     let results = await actions.rankedMeds(1)
     this.setState({ medications: results.data.meds })

       return this.state.medications.map(drug => {
         return (
           <li>
             <h2>{drug.name}</h2>
             <h4>{drug.rating}</h4>
           </li>
         )
       })
   }
   
  setUser = (user) => this.setState(user)

  async componentDidMount() {
    let user = await actions.isLoggedIn()
    this.setState({ ...user.data })
  }
  
  getResults = async term => {
    let results = await actions.search(term)
    // this.setState({ meds: results.data.meds})
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
// TODO: Check remove from cart
removeFromCart = item => {
  let newCart = this.state.cart
  if(newCart.length !== 0) newCart.splice(newCart.indexOf(item),1)
  this.setState({cart: newCart})
}
// Place order
  onOrderSubmit = () => {

    // clear cart stored in state only if there is at least one item in it
     this.setState({
       cart: []
     })
  }
  // PROFILE EDIT STUFF 
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  render() {
    return (
      <div className="App">

        {JSON.stringify(this.state.results)}
        <Navbar userSet={this.setUser} profile={this.state} />
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} 
            getResults={this.getResults} showInfo={this.showInfo} displayRankedMeds= {this.displayRankedMeds}/>} />
          <Route exact path="/login" render={(props) => <Login {...props} setUser={this.setUser} />} />

          <Route exact path="/order" render={(props) => <Order {...props} show={this.state.show} 
            cart={this.state.cart} 
            onOrderSubmit={this.onOrderSubmit} 
            removeFromCart={this.removeFromCart}/>} />

          <Route exact path="/profile" render={(props) => <Profile {...props} profile={this.state} 
            handleChange={this.handleChange} profileSubmit={this.state.profileSubmit} />} />

          <Route exact path="/signup" render={(props) => <SignUp {...props} setUser={this.setUser} />} />
          <Route exact path="/product" render={(props) => <ProductInfo {...props} currentProduct={this.state.currentProduct} 
            addToCart={this.addToCart} />} /> 
          <Route exact path="/about" render={(props) => <About {...props} />} />
  
        </Switch>
        <Footer />
      </div>
    );
  }
}
// https://limitless-basin-84494.herokuapp.com/ 
export default App;
