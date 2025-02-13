import React from 'react';
import './SelectTicket.css';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

function SelectTicket() {
    const navigate = useNavigate();
    
  return (
    <div className='select-container'>
        <Navbar />
        <div className='card'>
            <div className='card-header'>
                <h2>Ticket Selection</h2>
                <h4>Step 1/3</h4>
            </div>
            <hr />
            <div className='card-content'>
                <div className='event-content'>
                    <h3 className='event-title'>Techembers Fest '25</h3>
                    <p className='event-description'>Join us for an unforgettable experience.</p>
                    <p>Secure Your spot now</p>
                    <p className='event-details'>📍 Event Location | March 15, 2025 7:00 PM</p>
                </div>
            <hr />
                <div className='ticket-selection'>
                    <h4>Select Ticket Type: </h4>
                    <div className='ticket-options'>
                        <button className='ticket-button'>Regular Access - Free</button>
                        <button className='ticket-button'>VIP Access - $50</button>
                        <button className='ticket-button'>VVIP Access - $150</button>
                    </div>
                </div>
                <div className='ticket-count'>
                    <h4>Number Of Tickets</h4>
                    <select className='ticket-select'>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </select>
                </div>
                <div className='button-group'>
                    <button className='cancel-button' onClick={() => navigate('/')}>Cancel</button>
                    <button className='next-button' onClick={() => navigate('/attendee')}>Next</button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default SelectTicket;
