import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
    return (
        <div>
            <nav className="navbar navbar-expand navbar-light bg-light">
                <Link to='/' className='navbar-brand' ><img className='logo' src="https://i.imgur.com/WcSNpf2.png" alt="" />Noise Tracker</Link>
                <div id="navbarNav">
                    <ul className="navbar-nav">
                        <li>
                            <Link to='/settings' className='nav-link'> Settings </Link>
                        </li>
                        <li>
                            <Link to='/calendar' className='nav-link'> My Calendar </Link>
                        </li>
                        <li>
                            <Link to='' onClick={props.handleLogout} className='nav-link'> Log Out </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}


export default NavBar;