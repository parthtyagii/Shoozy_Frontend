import React from 'react';
import { CiSearch } from 'react-icons/ci';
import { BiBell } from 'react-icons/bi';
import { BsChatDots } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import './Navbar.css';





function Navbar() {
    return (
        <div className="navContainer">

            <div className="leftPart">
                <span className="title">
                    SHOOZY
                </span>

                <input type="text" name="user_search" id="user_search" />
                <CiSearch className='searchIcon' />
            </div>

            <div className="middle">
                <ul>
                    <li>Home</li>
                    <li>Products</li>
                    <li>Promo</li>
                    <li>Contact us</li>
                </ul>
            </div>

            <div className="right">
                <ul>
                    <li><BiBell /></li>
                    <li><BsChatDots /></li>
                    <li><AiOutlineHeart /></li>
                    <li><AiOutlineShoppingCart /></li>
                </ul>

                <span>
                    Login
                </span>

            </div>

        </div>
    );
}

export default Navbar;
