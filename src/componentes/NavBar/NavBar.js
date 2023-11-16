import React from 'react';
import CartWidget from "./CardWidget/CardWidget"



const Navbar = () => {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                    Logo
                </a>
            </div>

            <div className="navbar-menu">
                <div className="navbar-start">
                    <a className="navbar-item" href="#">
                        Tortas
                    </a>
                    <a className="navbar-item" href="#">
                        Postre
                    </a>
                    <a className="navbar-item" href="#">
                        Mesa Dulce
                    </a>
                    <span className="icon-text">
                        <span className="icon">
                            <i className="fas fa-cart"></i> 0
                        </span>
                        
                    </span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;