import React from 'react'
import '../style/App.css'
import { Link } from 'react-router-dom'
import { useStateValue } from '../StateProvider'

const Footer = () => {
    const [{loggedinuser}] = useStateValue()
    const admin_email = process.env.REACT_APP_ADMIN_EMAIL

    function topFunction() {
        document.documentElement.scrollTop = 0;
    }

    return (
        <div className="footer">
            <div className="footer__top" onClick={topFunction}>
                <p>Ugrás a lap tetejére</p>
            </div>
            <div className="footer__links">
                <div className="footer__linkCol">
                    <div>ÁSZF</div>
                    <div>Információk</div>
                </div>

                <div className="footer__linkCol">
                    <div>Vásárlási feltételek</div>
                    <div>Adatkezelési tájékoztató</div>
                    
                    {
                    loggedinuser?.email === admin_email
                    ?
                    <div><Link to="/admin" className="footer__admin">ADMIN</Link></div>
                    :
                    console.log('')
                    }   
                    
                    
                </div>

                <div className="footer__linkCol">
                    <div>Rólunk</div>
                    <div>Partnereink</div>
                </div>
            </div>
        </div>
    )
}

export default Footer;