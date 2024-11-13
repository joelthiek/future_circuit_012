import React, { useState } from 'react';
import './Navbar.css';
import logo from './ResumeCraftLogo.png';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handlePath = () => {
        navigate('/');
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <img src={logo} alt="Logo" className="navbar-brand" onClick={handlePath} />
            </div>

            <div className={`navbar-center ${isMenuOpen ? 'open' : ''}`}>
                <ul className="nav-links">
                    <li>
                        <a href="/auth">Login</a>
                    </li>
                    <li>
                        <a href="/register">SignUp</a>
                    </li>
                </ul>
            </div>

            <div className="navbar-hamburger" onClick={toggleMenu}>
                <span className="hamburger-icon">&#9776;</span>
            </div>
        </nav>
    );
};

export default Navbar;
