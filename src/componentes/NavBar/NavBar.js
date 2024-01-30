import React from 'react'
import '../NavBar/NavBar.css'
import CartWidget from '../CardWidget/CardWidget'
import 'bulma/css/bulma.css'
import logo from '../CardWidget/imagenes/file.jpg'
import { NavLink, Link } from 'react-router-dom'



const Navbar = () => {
    return (
        <nav className="navbar is-danger" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <NavLink to='/' className="navbar-item">
                    <span className="icon is-large">
                        <img className="Logo" src={logo} alt="cart-widget" />
                    </span>
                </NavLink>
            </div>

            <div className="navbar-menu">
                <div className="navbarList navbar-start">
                    <NavLink to={'/category/tortas'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Tortas</NavLink>
                    <NavLink to={'/category/postres'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Postres</NavLink>
                </div>
                <Link to='/'>
                <h3>Paulette Cocina</h3>
                </Link>
                <CartWidget itemCount={0} />
            </div>
        </nav>
    );
};

export default Navbar;
