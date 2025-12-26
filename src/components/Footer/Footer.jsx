import React from 'react';

import Logo from '../../assets/logofooter.png'; 
import "./Footer.scss"

export default function Footer() {
    return (
    
        <footer className="footer">
            <img src={Logo} alt="Kasa" className="footer-logo" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    
    );
}