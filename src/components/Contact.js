import React from 'react';
import dev from '../img/dev.png';

function Contact() {
    return (
        <div>
            <section id="contact">
                <div className="contact container">

                <div>
                    <h1 className="section-title">CONTACTAME</h1>
                </div>

                <div className="contact-items">

                    <div className="contact-item">
                    <div className="contact-item-icon">
                        <img src={dev} alt="" />
                    </div>
                    <div className="contact-item-info">
                        <h1>Phone</h1>
                        <h2>Phone Number</h2>
                    </div>
                    </div>

                    <div className="contact-item">
                    <div className="contact-item-icon">
                        <img src={dev} alt="" />
                    </div>
                    <div className="contact-item-info">
                        <h1>Phone</h1>
                        <h2>Phone Number</h2>
                    </div>
                    </div>

                    <div className="contact-item">
                    <div className="contact-item-icon">
                        <img src={dev} alt="" />
                    </div>
                    <div className="contact-item-info">
                        <h1>Phone</h1>
                        <h2>Phone Number</h2>
                    </div>
                    </div>


                </div>

                </div>
            </section>
        </div>
    )
}

export default Contact;
