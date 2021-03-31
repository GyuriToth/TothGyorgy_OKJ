import React, {useState} from 'react'
import '../style/App.css'
import { Link } from 'react-router-dom'
import { useStateValue } from '../StateProvider'

const Footer = () => {
    const [{loggedinuser}, dispatch] = useStateValue()
    const admin_email = process.env.REACT_APP_ADMIN_EMAIL

    function topFunction() {
        document.documentElement.scrollTop = 0;
    }

    return (
        <div className="footer">
            <div className="footer__top" onClick={topFunction}>
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
                    {
                    loggedinuser?.email == admin_email
                    ?
                    <Link to="/admin"><div>ADMIN</div></Link>
                    :
                    console.log('Admin login')
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