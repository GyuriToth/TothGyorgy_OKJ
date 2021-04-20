import React from 'react';
import { Link } from 'react-router-dom';
import '../style/App.css';

function Navlinks (){
    return (
        <div className="navlinks">
            <div className="navlinks__container">
                    <Link to="/">Közlemény</Link>
            </div>
        </div>
    )
}

export default Navlinks