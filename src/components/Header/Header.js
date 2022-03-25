import React from 'react';
import logo from '../../images/SVG/Asset 1.svg'
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className='header'>
                <img src={logo} alt="" />
                    <h1>Shop Easy</h1>
                <div>
                    <a href="/Shop">Shop</a>
                    <a href="/Orders">Orders</a>
                    <a href="/Orders">About</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;