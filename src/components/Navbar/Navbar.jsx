import React from 'react';
import { CiSearch } from 'react-icons/ci';
import { BiBell } from 'react-icons/bi';
import { BsChatDots } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import logoImg from '../../shoozy.jpg';
import './Navbar.css';





function Navbar() {
    return (
        <div className="navContainer">

            <div className="leftPart">
                <div className="navLogoImg">
                    <img src={logoImg} alt="logo_img" />
                </div>

                <input type="text" name="user_search" id="user_search" />
                <CiSearch className='searchIcon' />
            </div>

            <div className="middle">
                <ul>
                    <li>Home</li>
                    <li>
                        <select name="products" id="products">
                            <option value="-">Products</option>
                            <option value="Nike">Nike</option>
                            <option value="Adidas">Adidas</option>
                            <option value="Reebok">Reebok</option>
                        </select>
                    </li>
                    <li>Promo</li>
                    <li>Contact us</li>
                </ul>
            </div>

            <div className="right">
                <ul>
                    <li><BiBell /></li>
                    <li><BsChatDots /></li>
                    <li><AiOutlineHeart />
                        <span className='Count'>5</span>
                    </li>
                    <li><AiOutlineShoppingCart />
                        <span className='Count'>5</span>
                    </li>
                </ul>

                <div className="navProfileImg">
                    <img src="https://i.scdn.co/image/ab6761610000e5ebd3b9cce395e9b88684af3a59" alt="profile_image" />
                </div>

            </div>

        </div>
    );
}

export default Navbar;
