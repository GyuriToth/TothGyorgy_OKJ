import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCartRounded';
import UserIcon from '@material-ui/icons/AccountCircleOutlined';
import './App.css';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from './img/logo.png';
import { useStateValue } from './StateProvider';
import { auth } from './firebase'
import shop from './Shop.js';
import { useEffect } from 'react';

function Header() {

  const [{basket, loggedinuser}, dispatch] = useStateValue();

  console.log("user >> ", loggedinuser?.email)

  useEffect(() => {
    auth.onAuthStateChanged((userauth) => {
      if (userauth){
        dispatch ({
          type: 'SET_LOGIN',
          user: userauth
        })
      }
      else {
        dispatch ({
          type: 'SET_LOGIN',
          user: null
        })
      }
    })

  },[])

  return (
    <nav className="header">
      <Link to="/" className="header__link">
        <img className="header__logo" src={logo} alt="logo" />
      </Link>
      
      {/*
      <div className="header__search">
        <SearchIcon className="header__searchIcon" />
        <input type="text" className="header__searchInput" />
      </div>
      */}

      <div className="header__nav">
        <Link to="/" className="header__link">
            <div className="header__option">
              <span className="header__optionLineOne">HOME</span>
              <span className="header__optionLineTwo"></span>
            </div>
        </Link>

        <Link to="/shop" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">SHOP</span>
            <span className="header__optionLineTwo"></span>
          </div>
        </Link>
        </div>

        <Link to={!loggedinuser && "/login"} className="header__link">
          <div className="header__optionUser">
            <div onClick={auth.signOut}>
              <div className="header__optionLineOne">{loggedinuser?.email}</div>
              <div className="header__optionLineTwo">{loggedinuser ? "Signout" : "Signin"}</div>
            </div>
          </div>
        </Link>

        <Link to="/checkout" className="header__link">
          <div className="header__optionCart">
            <ShoppingCartIcon/>
            <span className="header__optionLineTwo header__productCount">{basket?.length}</span>
          </div>
        </Link>
    </nav>
  );
}

export default Header;
