import React from 'react'
import './App.css'
import './Footer.css'
import { Link } from 'react-router-dom'
import Admin from './Admin'

function Footer () {
    return (
        <div className="footer">
            <div className="footer__top">
                <p>Back to Top</p>
            </div>
            <div className="footer__links">
                <div className="footer__linkCol">
                    <div>ÁSZF</div>
                    <div>Információk</div>
                </div>

                <div className="footer__linkCol">
                    <div>Vásárlási feltételek</div>
                    <div>Adatkezelési tájékoztató</div>
                    <Link to="/admin"><div>ADMIN</div></Link>
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