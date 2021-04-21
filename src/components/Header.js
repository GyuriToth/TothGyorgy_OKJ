import React, { useEffect } from 'react'
import LocalMallIcon from '@material-ui/icons/LocalMall'
import PersonIcon from '@material-ui/icons/Person'
import PersonAddIcon from '@material-ui/icons/PersonAdd'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import '../style/App.css'
import { Link } from 'react-router-dom'
import { useStateValue } from '../StateProvider'
import { auth } from '../firebase'

function Header() {

  const [{basket, loggedinuser}, dispatch] = useStateValue();

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

  },[]);

  return (
    <nav className="header">
      <div className="header__logoBox" >
        <Link to="/" className="header__link">
          <img className="header__logo" src="https://firebasestorage.googleapis.com/v0/b/bodorakku-575ca.appspot.com/o/shopping-bag.png?alt=media&token=0c341018-fd06-4e5b-9b78-86e1fc1a8361" alt="logo" />
        </Link>
      </div>
      
      
      {/*
      <div className="header__search">
        <SearchIcon className="header__searchIcon" />
        <input type="text" className="header__searchInput" />
      </div>
      */}

      <div className="header__nav">
        <Link to="/shop" className="header__link">
          <div className="header__option">
            <span className="header__optionLine">Áruház</span>
          </div>
        </Link>

        {/*
        <Link to="/home" className="header__link">
            <div className="header__option">
              <span className="header__optionLine">HOME</span>
            </div>
        </Link>
        */}
      </div>

        <div className="header__toolbar">
          <div className="header__toolbarInner">
            <div className="header__optionUser">
                  {
                    loggedinuser 
                    ?
                    <div>
                      <Link to={loggedinuser ? "/profile" : "/login"} className="header__link">
                        <PersonIcon/>
                      </Link>
                      <ExitToAppIcon className="header__link" onClick={() => auth.signOut()}/>
                    </div>
                    :
                    <div>
                      <Link to={loggedinuser ? "/profile" : "/login"} className="header__link">
                          <PersonAddIcon/>
                      </Link>
                    </div>
                  }
              </div>

            <Link to="/checkout" className="header__link">
              <div className="header__optionCart">
                <LocalMallIcon/>
                <div className="header__productCount">{basket?.length}</div>
              </div>
            </Link>
          </div>
        </div>
            
    </nav>
  );
}

export default Header;
