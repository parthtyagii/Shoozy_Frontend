import React from 'react';
import { CiSearch } from 'react-icons/ci';
import { BiBell } from 'react-icons/bi';
import { BsChatDots } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import logoImg from '../../shoozy.jpg';
import './Navbar.css';
import RecordBoxCart from '../RecordBoxCart/RecordBoxCart';
import RecordBoxLiked from '../RecordBoxLiked/RecordBoxLiked';
import { useState } from 'react';
import { Link } from 'react-router-dom';




function Navbar() {

    const [likedShoes, setLikedShoes] = useState(false);
    const [cartShoes, setCartShoes] = useState(false);







    return (
        <div className="navContainer">

            <div className="leftPart">
                <div className="navLogoImg">
                    <img src={logoImg} alt="logo_img" />
                </div>

                <div className="userSearch">
                    <input type="text" name="user_search" id="user_search" placeholder='Search Shoe' />
                    <CiSearch className='searchIcon' />
                </div>
            </div>

            <div className="middle">
                <ul>
                    <li>
                        <Link to='/' className='link'>Home</Link>
                    </li>
                    <li>
                        <select name="products" id="products">
                            <option value="-">Products</option>
                            <option value="Nike">Nike</option>
                            <option value="Adidas">Adidas</option>
                            <option value="Reebok">Reebok</option>
                        </select>
                    </li>
                    <li>Contact us</li>
                    <li>GitHub</li>
                </ul>
            </div>

            <div className="right">
                <ul>
                    <li><BiBell /></li>
                    <li><BsChatDots /></li>
                    <li><AiOutlineHeart onClick={(e) => setLikedShoes(!likedShoes)} />
                        <span className='Count'>5</span>

                        {likedShoes &&
                            <RecordBoxLiked />
                        }

                    </li>
                    <li><AiOutlineShoppingCart onClick={(e) => setCartShoes(!cartShoes)} />
                        <span className='Count'>5</span>

                        {cartShoes &&
                            <RecordBoxCart />
                        }

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
