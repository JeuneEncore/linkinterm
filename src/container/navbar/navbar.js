import React from "react";
import './navbar.css';
import logo from '../../logo.png';

const Navbar = ({ onSelectPage }) => {
    return (
        <div className="container">
            <div className="logo-container">
                <img src={logo} alt="Logo" className="logo" />
            </div>
            <ul>
                <li>
                    <a onClick={() => onSelectPage("home")}>
                        Home
                    </a>
                </li>
                <li>
                    <a onClick={() => onSelectPage("internships")}>
                        Internships
                    </a>
                </li>
                <li>
                    <a onClick={() => onSelectPage("contact")}>
                        Contact Us
                    </a>
                </li>
            </ul>
            <div className="registration">
                <a onClick={() => onSelectPage("registration")}>
                    Registration
                </a>
            </div>
        </div>
    );
}

export default Navbar;
