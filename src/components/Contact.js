import React from 'react';
import dev from '../img/dev.png';
import email from '../img/email.png';
import whatsapp from '../img/whatsapp.png';
import linkedin from '../img/linkedin.png';

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
                        <img src={whatsapp} alt="" />
                    </div>
                    <div className="contact-item-info">
                        <h1>Teléfono</h1>
                        <h2>+54 351 590 2673</h2>
                    </div>
                    </div>

                    <div className="contact-item">
                    <div className="contact-item-icon">
                        <img src={email} alt="" />
                    </div>
                    <div className="contact-item-info">
                        <h1>Email</h1>
                        <h2>Gallegosmatiasjoel@gmail.com</h2>
                    </div>
                    </div>

                    <div className="contact-item">
                    <div className="contact-item-icon">
                        <img src={linkedin} alt="" />
                    </div>
                    <div className="contact-item-info">
                        <h1>LinkedIn</h1>
                        <h2>linkedin.com/in/gallegosmatias</h2>
                    </div>
                    </div>


                </div>

                </div>
            </section>
        </div>
    )
}

export default Contact;
