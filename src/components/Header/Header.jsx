import React from 'react';
import './Header.css';
import Banner from '../../banner.jpg';
import { useState, useEffect } from 'react';




function Header() {

    const [image, setImage] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            setImage(Banner);
        }, 1500);
    }, []);

    return (
        <div className="headerContainer">
            {!image &&
                <div className="banner skeleton"></div>
            }

            {image &&
                <div className="banner">
                    <img src={image} alt="banner_image" />
                </div>
            }
        </div>
    );
}

export default Header;