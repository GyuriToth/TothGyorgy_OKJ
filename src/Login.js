import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import logo from './img/logo.png';
import { auth } from './firebase';

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

    const registeruser = event =>{
        event.preventDefault()
        auth.createUserWithEmailAndPassword(useremail, userpassword)
        .then(auth => {
            history.push('/');
        })
        .catch(e => alert(e.message))
    }
    
    return(
        <div className="login">
            <Link>
                <img className="login__logo" alt="" src={logo}/>
            </Link>
            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={useremail} onChange={event => setUserEmail(event.target.value)} type="email"></input>
                    <h5>Password</h5>
                    <input value={userpassword} onChange={event => setUserPassword(event.target.value)} type="password"/>
                    <button onClick={loginuser} type="submit" className="login__signInButton">Sign In</button>
                </form>
                <button onClick={registeruser} className="login__registerButton">Create an account!</button>
            </div>
        </div>
    )
}

export default Login;