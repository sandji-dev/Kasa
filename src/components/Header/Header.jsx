import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../assets/logo.svg'; 
import "./Header.scss";

export default function Header() {
    return (
        <header className="container header">
            
            {/* LOGO CLIQUABLE */}
            <Link to="/">
                <img src={logo} alt="Kasa" className="header-logo" />
            </Link>

            <nav className="header-nav">
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/about">A Propos</NavLink>
            </nav>
        </header>
    );
}
