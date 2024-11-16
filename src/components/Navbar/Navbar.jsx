import React, { useState } from 'react';
import './Navbar.css';
import logo from "../../assets/image/ResumeCraftLogo.png";
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const details = localStorage.getItem("userEmail");

    const handleClick = () => {
        localStorage.setItem("userEmail", "");
    }
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
                {details ? <ul className="nav-links">

                    <li>
                        <Link to="/auth" onClick={handleClick}>Logout</Link>
                    </li>

                </ul> :
                    <ul className="nav-links">

                        <li>
                            {/* <a href="/auth">Login</a> */}
                            <Link to="/auth">Login</Link>
                        </li>
                        <li>
                            {/* <a href="/register">SignUp</a> */}
                            <Link to="/register">Signup</Link>
                        </li>
                    </ul>
                }
            </div>

            <div className="navbar-hamburger" onClick={toggleMenu}>
                <span className="hamburger-icon">&#9776;</span>
            </div>
        </nav>
    );
};

export default Navbar;
