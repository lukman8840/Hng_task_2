import React from 'react'
import './TicketConfirmation.css'
import Navbar from '../components/Navbar'
import qrCode from '../components/images/qr-code.jpg'

const TicketConfirmation = () => {
  return (
    <div className='confirmation-container'>
        <Navbar />
        <div className='confirmation-card'>
            <div className='confirm-header'>
                <h2 className='confirmation-title'>Ready</h2>
                <p className='step-info'>Step 3/3</p>
            </div>
            <hr className='divider'/>
            <h3>Your Ticket is Booked!</h3>
            <p className='ticket-message'>
                You can download or check your email for a copy 
            </p>

            <div className='ticket'>
                <div className='ticket-left'>
                    <img 
                        src={qrCode}
                        alt='QR Code'
                        className='qr-code'
                    />
                </div>
                <div className='ticket-info'>
                    <h3 className='event-name'>Techember Fest "25</h3>
                    <p className='event-location'>📍 04 Rumens road, Ikoyi, Lagos</p>
                    <p className='event-date'>📅 March 15, 2025 | 7:00 PM</p>
                </div>
                <div className='ticket-right'>
                    <p className='ticket-type'>REG</p>
                    <p className='ticket-vertical'>Techember Fest '25</p>
                    <p className='user-name'>User Name: John</p>
                </div>
            </div>

            <div className='button-group'>
                <button className='book-button'>Book Another Ticket </button>
                <button className='download-button'>Download Ticket </button>
            </div>
        </div>
    </div>
  )
}

export default TicketConfirmation