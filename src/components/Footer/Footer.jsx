import React from 'react';
import './Footer.css';
import Contactform from './components/Footer/Contactform.jsx';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className="address">
                    <h1 className='heading'>Visit Us</h1>
                    <p>
                        Panch Marg, Jeet Nagar, Versova, Andheri West, Mumbai, Maharashtra, 400061.
                        <br /><br />
                        088280 56555
                        <br />
                        siroccoversova@gmail.com
                        <br /><br />
                        <div className="icons">
                            <a href="https://www.facebook.com/SiroccoVersova/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                            <a href="https://www.instagram.com/siroccoversova/?hl=en" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                            <a href="https://x.com/SiroccoVersova" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
                        </div>
                    </p>
                </div>
                <div className="map-contact">
                    <div className="map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.343689336158!2d72.80759487466666!3d19.13642725007376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b608aacfcfc3%3A0x1a743f3ce4eb68c7!2sSirocco%20-%20Best%20Restaurant%20In%20Mumbai!5e0!3m2!1sen!2sin!4v1719410566433!5m2!1sen!2sin"
                            width="400"
                            height="300"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Sirocco Location"
                        >
                        </iframe>
                    </div>

                    <div className="contactform">
                        <Contactform />
                    </div>
                </div>
            </div>

            <div className="footer_final">
                <div className='footer_final_list_items'>
                    <ul>
                        <li>Privacy Policy</li>
                        <li>Terms and Condition</li>
                        <li>Contact Us</li>
                        <li>Cancellation & Refund</li>
                    </ul>
                    <p>Copyright © 2024 Sirocco @ Versova - All Rights Reserved. </p>
                </div>
            </div>
        </>
    )
}

export default Footer;
