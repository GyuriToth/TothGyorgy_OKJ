import React, { useState } from 'react';
import '../style/App.css';
import { Link, useHistory } from 'react-router-dom';
import logo from '../img/logo.png';
import { auth } from '../firebase';

function Login(){
    
    const history = useHistory()
    const [useremail,setUserEmail] = useState('')
    const [userpassword,setUserPassword] = useState('')

    const loginuser = event => {
        event.preventDefault()
        auth.signInWithEmailAndPassword(useremail, userpassword)
        .then((auth) => {
            history.push('/')
        })
        .catch(e => alert(e.message))
    }
    
    return(
        <div className="login">
            <Link to="/">
                <img className="login__logo" alt="logo" src={logo}/>
            </Link>
            <div className="login__container">
                <div className="login__title">
                    <h1>Bejelentkezés</h1>
                    <h4>Jelentkezzen be adatai megadásával!</h4>
                </div>
                <div className="login__info">
                    <form>
                        <h5>E-mail</h5>
                        <input value={useremail} onChange={event => setUserEmail(event.target.value)} type="email"></input>
                        <h5>Password</h5>
                        <input value={userpassword} onChange={event => setUserPassword(event.target.value)} type="password"/>
                        <br></br>
                        <button onClick={loginuser} type="submit" className="login__signInButton">Bejelentkezés</button>
                    </form>
                </div>
                <hr/>
                <div className="login__other">
                    <div className="login__otherHeader">
                        <h3>Még nem regisztált?</h3>
                        <h3>Tegye meg most!</h3>
                    </div>
                    
                    <Link to="/register">
                        <button className="login__registerButton">Regisztráció</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login;