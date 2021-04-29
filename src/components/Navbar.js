import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import MarkerIcon from '@material-ui/icons/Room';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    
    return (
        <>
           <nav className="navbar">
               <div className="navbar-container">
                   <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                       <MarkerIcon />HISTORICAL MAPS
                   </Link>
                   <div className="menu-icon" onClick={handleClick}>
                        {click ? <CloseIcon style={{ fontSize: 35 }} /> : <MenuIcon style={{ fontSize: 35 }} />}
                   </div>
                   <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/search' className='nav-links' onClick={closeMobileMenu}>
                            Search
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                            About
                        </Link>
                    </li>
                   </ul>
               </div>
           </nav>
        </>
    )
}

export default Navbar

