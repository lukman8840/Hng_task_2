import React, { useState } from 'react';
import './Attendee.css';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

function Attendee() {
    const navigate = useNavigate(); 

    const [email, setEmail] = useState('')

    return (
        <div className="attendee-container">
            <Navbar />
            <div className="form-container">
                <div className='form-info'>
                    <h2 className="form-title">Attendee Details</h2>
                    <p className="step-indicator">Step 2/3</p>
                </div>
                <hr />
                <form className="form-box">
                    <div className="upload-section">
                        <p>Upload Profile Photo</p>
                        <div className="upload-box">
                            <span className="upload-text">Drag & drop or click to upload</span>
                        </div>
                    </div>

                    <label htmlFor="name">Enter your name *</label>
                    <input type="text" id="name" name="name" />

                    <label htmlFor="email">Enter your email *</label>
                    <div className="email-input">
                        <span className="email-icon">📧</span>
                        <input 
                            type="email" 
                            id="email" 
                            className='email' 
                            name="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            />
                    </div>

                    <label htmlFor="project">About the project</label>
                    <textarea id="project" name="project"></textarea>

                    <div className="button-group">
                        <button type="button" className="back-button" onClick={() => navigate('/select-ticket')}>Back</button>
                        <button 
                            type="submit" 
                            className="next-button" 
                            onClick={(e) => {
                                e.preventDefault();
                                navigate('/ticket-confirmation')
                            }}
                            >
                                Get My Free Ticket
                            </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Attendee;
