import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg'; 
import "./Header.scss";

export default function Header() {
    return (
        <header className="header">
            <img src={logo} alt="Kasa" className="header-logo" />
            <nav className="header-nav">
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/about">A propos</NavLink>
            </nav>
        </header>
    );
}