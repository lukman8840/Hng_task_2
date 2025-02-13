import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import './cover.css'
import { useNavigate } from 'react-router-dom';

function Cover() {
const navigate = useNavigate();

  return (
    <div className="main-cover">
       <h1 className="h1">Ticketing Booking App</h1>
       <p>Dev Practice Design File</p>
       <button className='booked' onClick={() => navigate('select-ticket')}>
        Book a Ticket <FaArrowRight />
        </button>
    </div>
  )
}

export default Cover