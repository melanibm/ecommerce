import React from 'react'
import '../NavBar/NavBar.css'
import CartWidget from '../CardWidget/CardWidget'
import 'bulma/css/bulma.css'
import logo from '../CardWidget/imagenes/file.jpg'
import { NavLink, Link } from 'react-router-dom'




const Navbar = () => {
    return (
        <nav className="navbar is-danger" role="navigation" aria-label="main navigation" style={{ background: '#f00', padding: '10px' }}>
            <div className="navbar-brand">
                <NavLink to='/' className="navbar-item">
                    <span className="icon is-large">
                        <img className="logo" src={logo} alt="cart-widget" />
                    </span>
                </NavLink>
            </div>

            <div className="navbar-menu" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div className="navbar-start">
                    <NavLink to={'/category/tortas'} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Tortas</NavLink>
                    <NavLink to={'/category/postres'} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Postres</NavLink>
                </div>

                <div className="navbar-end" style={{ display: 'flex', alignItems: 'center' }}>
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <h3 className='name' style={{ color: '#fff' }}>Paulette Cocina</h3>
                    </Link>
                    <CartWidget itemCount={0} />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

