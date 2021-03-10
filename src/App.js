import React from 'react';
import './App.css';
import Header from './Header';
import About from './About';
import Shop from './Shop';
import Home from './Home'
import Login from './Login';
import Checkout from './Checkout';
import Footer from './Footer';
import Navlinks from './Navlinks';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { auth } from './firebase';
import { useEffect } from 'react';
import { useStateValue } from './StateProvider';

function App() {
  
  const [{loggedinuser, basket}, dispatch] = useStateValue();

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home}>
            <Header/>
            <Navlinks/>
            <Home/>
            <Footer/>
          </Route>

          <Route path="/about" component={About}>
            <Header/> 
            <Footer/>
          </Route>

          <Route path="/shop" component={Shop}>
            <Header/>
            <Navlinks/>
            <Shop/>
            <Footer/>
          </Route>
          
          <Route path="/login" component={Login}>
            <Login/>
            <Footer/>
          </Route>

          <Route path="/user">

          </Route>

          <Route path="/checkout" component={Checkout}>
            <Header/>
            <Checkout/>
            <Footer/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}



export default App;
