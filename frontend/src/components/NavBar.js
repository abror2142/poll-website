import React from "react";
import { Link } from "react-router-dom";


function Navbar(){
    return (
        <nav className="navbar">
            <div className="nav-left">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li ><Link to="#" className="no-wrap">Poll Maker</Link></li>
                    <li><Link to="#">Docs</Link></li>
                    <li><Link to="#">Tips</Link></li>
                    <li><Link to="#">About</Link></li>
                    <li><Link to="#">Contact</Link></li>
                </ul>
            </div>

            <div className="nav-middle">
                <Link to="/">
                    <ul className="brand-name">
                        <li>P</li>
                        <li>O</li>
                        <li>L</li>
                        <li>L</li>                        
                        <li>E</li>
                        <li>R</li>
                        <li className="brand-last">B</li>
                    </ul>
                </Link>
            </div>

            <div className="nav-right">
                <Link to="#" className="register-btn">Register</Link>
                <Link to="#" className="login-btn">Login</Link>
            </div>
        </nav>
    )
}

export default Navbar