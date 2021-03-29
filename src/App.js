import React from 'react'
import './App.css'

import Header from './Header'
import About from './About'
import Shop from './Shop'
import Home from './Home'
import Login from './Login'
import Checkout from './Checkout'
import Footer from './Footer'
import Navlinks from './Navlinks'
import Register from './Register'
import Profile from './Profile'
import Admin from './Admin'
import { Order } from './Order'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { auth } from 'firebase'
import { useEffect } from 'react'
import { useStateValue } from './StateProvider'

import firebase from 'firebase'

function App() {
  
  const [{loggedinuser, basket}, dispatch] = useStateValue();

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Shop}>
            <Header/>
            <Navlinks/>
            <Shop/>
            <Footer/>
          </Route>
          
          <Route path="/admin" component={Admin}>
            <Header/>
            <Admin/>
            <Footer/>
          </Route>

          <Route path="/shop" component={Shop}>
            <Header/>
            <Navlinks/>
            <Shop/>
            <Footer/>
          </Route>

          <Route path="/about" component={About}>
            <Header/> 
            <Footer/>
          </Route>

          <Route path="/home" component={Home}>
            <Header/>
            <Navlinks/>
            <Home/>
            <Footer/>
          </Route>
          
          <Route path="/login" component={Login}>
            <Login/>
            <Footer/>
          </Route>

          <Route path="/register" component={Register}>
            <Register/>
            <Footer/>
          </Route>

          <Route path="/profile" component={Profile}>
            <Header/>
            <Profile/>
            <Footer/>
          </Route>

          <Route path="/checkout" component={Checkout}>
            <Header/>
            <Checkout/>
            <Footer/>
          </Route>

          <Route path="/order" component={Order}>
            <Header/>
            <Order/>
            <Footer/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}



export default App;
