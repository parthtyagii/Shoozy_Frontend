import React from 'react';
import './Header.css';
import Banner from '../../banner.jpg';




function Header() {
    return (
        <div className="headerContainer">
            <div className="banner">
                <img src={Banner} alt="banner_image" />
            </div>
        </div>
    );
}

export default Header;