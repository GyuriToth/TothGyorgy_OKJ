import React from 'react'
import './style/App.css'

import Header from './components/Header'
import Shop from './components/Shop'
import Home from './components/Home'
import Login from './components/Login'
import Checkout from './components/Checkout'
import Footer from './components/Footer'
import Navlinks from './components/Navlinks'
import Register from './components/Register'
import Profile from './components/Profile'
import { Admin } from './components/Admin'
import { Order } from './components/Order'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {

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
