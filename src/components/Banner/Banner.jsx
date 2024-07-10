import React from 'react'
import './Banner.css';
import { NavLink } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='banner'>
            <img src="assets/banner_3.png" alt="" />
            <div className="banner_text">
                <h1>Feel the Vibe, Taste the Thrill!</h1>
                <button><NavLink to="/reservations">Book a Table</NavLink></button>
            </div>
        </div>
    )
}

export default Banner
