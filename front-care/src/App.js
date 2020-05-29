import React, { Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import Home from './components/Home';
import Login from './components/user/Login'
import Profile from './components/user/Profile'
import SignUp from './components/user/SignUp'
import Navbar from './components/NavBar';
import Order from './components/Order'
import SearchBar from './components/search/SearchBar';
import ProductInfo from './components/search/ProductInfo';
import actions from './services/index';

class  App extends Component {
  state = {
    cart: [],
    currentProduct: {},
    medications: null,
    show: false
   }

   displayRankedMeds = async ()=> {
     let results = await actions.rankedMeds(1)
     this.setState({ medications: results.data.meds })
     console.log(results)

       return this.state.medications.map(drug => {
         return (
           <li>
             <h2>{drug.name}</h2>
             <h4>{drug.rating}</h4>
           </li>
         )
       })
   }
   
  showModal = () => {
    this.setState({
      show: true,
    });
  };
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
    
    console.log(item)
    let cart = [...this.state.cart]
    cart.push(item)
    this.setState({
        cart: cart 
     })
  }
// Place order
  onOrderSubmit = async (userOrder) => {
    let re = await actions.placeOrder(userOrder)
    this.setState({show: true})

  }

// PROFILE EDIT STUFF 
  handleChange = e => {
    console.log(e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  // handleBlur = () => {
  //   ;
  // };

  // profileSubmit = async (e) => {
  //   e.preventDefault()
  //   console.log("made it to submit")
  //   let newProfile = await actions.editProfile(this.state)
  //   this.stateState({profile: newProfile})
  // }

  render() {
    return (
      <div className="App">

        {JSON.stringify(this.state.results)}
        <Navbar  userSet={this.setUser} />
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} 
            getResults={this.getResults} showInfo={this.showInfo} displayRankedMeds= {this.displayRankedMeds}/>} />
          <Route exact path="/login" render={(props) => <Login {...props} setUser={this.setUser} />} />
          <Route exact path="/order" render={(props) => <Order {...props} cart={this.state.cart} 
          onOrderSubmit={this.onOrderSubmit}/>} />
          <Route exact path="/profile" render={(props) => <Profile {...props} profile={this.state} 
            handleChange={this.handleChange} profileSubmit={this.state.profileSubmit} />} />

          <Route exact path="/signup" render={(props) => <SignUp {...props} setUser={this.setUser} />} />
          <Route exact path="/product" render={(props) => <ProductInfo {...props} currentProduct={this.state.currentProduct} 
            addToCart={this.addToCart} />} /> 
        </Switch>
      </div>
    );
  }
}
// https://limitless-basin-84494.herokuapp.com/ 
export default App;
