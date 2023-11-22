import React from 'react';
import CartWidget from "../CardWidget/CardWidget";
import 'bulma/css/bulma.css';
import logo from '../CardWidget/imagenes/file.jpg';



const Navbar = () => {
    return (
        <nav className="navbar is-danger" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item " href="#">
                    <span className="icon is-large">
                    <img src={logo} alt="cart-widget" />
                    </span>
                    
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

                </div>
                <CartWidget />

            </div>
           

        </nav>
    );
};

export default Navbar;