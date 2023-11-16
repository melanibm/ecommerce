import React from 'react';
import CartWidget from "./CardWidget/CardWidget";
import 'bulma/css/bulma.css';
import cart from './CardWidget/imagenes/cart-outline.svg';
import logo from './CardWidget/imagenes/file.jpg'



const Navbar = () => {
    return (
        <nav className="navbar is-danger" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item " href="#">
                    <span class="icon is-large">
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

            </div>
            <div className="navbar-start">
                <a className="navbar-item icon-text " href="#">
                    <span className="icon">
                        <img src={cart} alt="cart-widget" />
                        0
                    </span>

                </a>

            </div>

        </nav>
    );
};

export default Navbar;