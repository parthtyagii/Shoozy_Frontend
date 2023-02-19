import React from 'react';
import './Header.css';
import Banner from '../../banner.jpg';
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();



function Header() {

    return (
        <div className="headerContainer">

            <div className="banner" data-aos="fade-up" data-aos-duration="1050">
                <img src={Banner} alt="banner_image" />
            </div>
            
        </div>
    );
}

export default Header;