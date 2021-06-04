import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PinterestIcon from '@material-ui/icons/Pinterest';
import MarkerIcon from '@material-ui/icons/Room';


function Footer() {
    return (
        <div className='footer-container'>
            <div className='wrapper'>
                <div className='footer-logo-wrapper'>             
                    <Link to='/' className='footer-logo'>
                        <MarkerIcon />HISTORICAL MAPS
                    </Link>
                </div>    
                <div className='footer-wrapper'>
                    <div className='footer-info footer-info--contact'>
                        <h4>Contact Us</h4>
                        <p>info@example.com</p>
                        <p>+46(0)70 XXX XX XX</p>
                    </div>
                    <div className='footer-info footer-info--socials'>
                        <FacebookIcon />
                        <TwitterIcon />
                        <LinkedInIcon />
                        <PinterestIcon />
                    </div>
                    <div className='footer-info footer-info--nav'>
                        <h4>Navigation</h4>
                        <Link to='/'>Home</Link>
                        <Link to='/search'>Search</Link>
                        <Link to='/about'>About</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
