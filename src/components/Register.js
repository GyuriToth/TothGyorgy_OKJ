import React, { useState } from 'react';
import '../style/Register.css';
import { Link, useHistory } from 'react-router-dom';
import firebase, { auth } from '../firebase';

function Register(){
    const history = useHistory()
    const [useremail,setUserEmail] = useState('')
    const [userpassword,setUserPassword] = useState('')

    const registeruser = event =>{
        event.preventDefault()
        auth.createUserWithEmailAndPassword(useremail, userpassword)
        .then(auth => {
            history.push('/');
        })
        .catch(e => alert(e.message))

        var db = firebase.firestore();

        db.collection("userInformation").doc(useremail).set({
            name: "Neve2"
        })
    }
    
    return(
        <div className="register">
            <Link to="/">
                <img className="register__logo" alt="logo" src="https://firebasestorage.googleapis.com/v0/b/bodorakku-575ca.appspot.com/o/shopping-bag.png?alt=media&token=149b2896-aff8-4a2c-a0c5-212a51bce0f4"/>
            </Link>
            <div className="register__container">
                <div className="register__title">
                        <h1>Regisztráció</h1>
                        <h4>Regisztráljon oldalunkra e-mail és jelszó megadásával!</h4>
                </div>

                <div className="register__info">
                    <form>
                        <h5>E-mail</h5>
                        <input value={useremail} onChange={event => setUserEmail(event.target.value)} type="email"></input>
                        <h5>Jelszó</h5>
                        <input value={userpassword} onChange={event => setUserPassword(event.target.value)} type="password"/>
                        <br></br>
                        <button onClick={registeruser} type="submit" className="register__registerButton">Regisztráció</button>
                    </form>
                </div>

                <hr/>
                
                <div className="register__other">
                    <div className="register__otherHeader">
                        <h3>Már regisztrált egyszer?</h3>
                        <h3>Jelentkezzen be itt!</h3>
                    </div>
                    
                    <Link to="/login">
                        <button className="register__signInButton">Bejelentkezés</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Register;