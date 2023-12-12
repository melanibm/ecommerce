import React from 'react';
import CartWidget from "../CardWidget/CardWidget";
import 'bulma/css/bulma.css';
import logo from '../CardWidget/imagenes/file.jpg';



const Navbar = () => {
    return (
        <nav className="navbar is-danger" role="navigation" aria-label="main navigation">
            <header className="navbar-brand">
                <a className="navbar-item " href=".">
                    <span className="icon is-large">
                    <img src={logo} alt="cart-widget" />
                    </span>
                    
                </a>
            </header>

            <div className="navbar-menu">
                <div className="navbar-start">
                    <a className="navbar-item has-shadow" href="tortas">
                        Tortas
                    </a>
                    <a className="navbar-item" href="postre">
                        Postre
                    </a>
                    <a className="navbar-item" href="mesa-dulce">
                        Mesa Dulce
                    </a>

                </div>
                <CartWidget itemCount={5} />

            </div>
            
           

        </nav>
    );
};

export default Navbar;