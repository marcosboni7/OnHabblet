import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropwdown';

function Navbar() {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false);


    //COMEÇAMOS PELO RESPONSIVO DO MENU MOBILE E PC//
    //ON CLICK É PARA MUDAR O ICONE DO MENU //

    return (
        <>
            <nav className="navbar">
                <Link to='/'
                    className="navbar-logo">
                    OnHabblet
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu actions' : 'nav-menu'}>
                    <li class="nav-on">
                        <Link to="/" className='nav-links' onClick={closeMobileMenu}>
                            OnHabblet
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}
export default Navbar;