import React from "react";
import { Link } from "react-router-dom";


function Navbar(){
    return (
        <nav className="navbar">
            <div className="nav-left">
                <ul>
                    <li><Link to="/" className="hover">Home</Link></li>
                    <li><Link to="#" className="no-wrap hover">Poll Maker</Link></li>
                    <li><Link to="#" className="hover">Docs</Link></li>
                    <li><Link to="#" className="hover">Tips</Link></li>
                    <li><Link to="#" className="hover">About</Link></li>
                    <li><Link to="#" className="hover">Contact</Link></li>
                </ul>
            </div>

            <div className="nav-middle">
                <Link to="/">
                    <ul className="brand-name">
                        <li className="hover">P</li>
                        <li className="hover">O</li>
                        <li className="hover">L</li>
                        <li className="hover">L</li>                        
                        <li className="hover">E</li>      
                        <li className="hover">R</li>
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