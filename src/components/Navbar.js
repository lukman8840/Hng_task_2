import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import ticketLogo from '../components/images/ticketLogo.png';
import './Navbar.css'; // Create a separate CSS file for styling if needed

const Navbar = () => {
    return (
        <div className='nav-container'>
            <img src={ticketLogo} alt='ticketLogo' />
            <div className='nav-list'>
                <a href='#'>Events</a>
                <a href='#'>My Tickets</a>
                <a href='#'>About Project</a>
            </div>
            <div className='my-ticket'>
                <button className='booked'>My Tickets <FaArrowRight /></button>
            </div>
        </div>
    );
};

export default Navbar;
