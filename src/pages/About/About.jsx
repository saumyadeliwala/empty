// About.jsx
import React from 'react';
import './About.css';

const About = () => {
    return (
        <>
            <div className="wrapper">
                <div className='aboutus'>
                    <h1>Our Story</h1>
                    <p>Sirocco in Versova, Mumbai, is a charming poolside cafe and bistro nestled in the bustling
                        cityscape. Set against the backdrop of Mumbai's vibrant atmosphere, Sirocco offers a delightful
                        blend of culinary experiences with its cafe, bistro, and a lively poolside ambiance. Surrounded
                        by lush greenery, it provides a perfect spot to unwind and enjoy delicious food and drinks.

                        <br />

                        Sirocco in Versova, Mumbai, offers a serene retreat just steps away from the sparkling waters
                        of Versova Beach. Lounge comfortably by the poolside, indulge in refreshing cocktails at the bar,
                        and savor delectable dishes from the bistro. Whether you're looking to relax solo or gather
                        with friends, Sirocco provides an inviting space to unwind and soak in the Mumbai vibes.
                    </p>
                </div>

                <div className="video2">
                    <img src="assets/pizza_2.png" alt="" />
                </div>

                <div className="footer_final">
                    <div className='footer_final_list_items'>
                        <ul>
                            <li>Privacy Policy</li>
                            <li>Terms and Condition</li>
                            <li>Contact Us</li>
                            <li> Cancellation & Refund</li>
                        </ul>
                        <p>Copyright © 2024 Sirocco @ Versova - All Rights Reserved. </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
