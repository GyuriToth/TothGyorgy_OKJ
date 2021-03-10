import React from 'react';
import './Footer.css';

function Footer () {
    return (
        <div className="footer">
            <div className="footer__top">
                <p>Back to Top</p>
            </div>
            <div className="footer__links">
                <div className="footer__linkarea">
                    <span>test1</span>
                </div>

                <div className="footer__linkarea">
                    <span>test2</span>
                </div>

                <div className="footer__linkarea">
                    <span>test3</span>
                </div>
            </div>
        </div>
    )
}

export default Footer;