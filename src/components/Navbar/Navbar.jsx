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
import { ShoesContext } from '../../Context/Context';
import { useContext, useEffect } from 'react';




function Navbar() {

    let { LikedShoes, setLikedShoes, CartShoes, setCartShoes } = useContext(ShoesContext);

    const [likedListShoes, setLikedListShoes] = useState(false);
    const [cartListShoes, setCartListShoes] = useState(false);

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
                            <option value="Shoes">Shoes</option>
                            {/* <option value="Nike">Nike</option>
                            <option value="Adidas">Adidas</option>
                            <option value="Reebok">Reebok</option> */}
                        </select>
                    </li>
                    <li>
                        <a href='https://www.linkedin.com/in/parth-tyagi-0724a81b7/' className='link'>
                            Contact us
                        </a>
                    </li>
                    <li>
                        <a href='https://github.com/parthtyagii?tab=overview&from=2022-06-01&to=2022-06-20' className='link'>
                            GitHub
                        </a>
                    </li>
                </ul>
            </div>

            <div className="right">
                <ul>
                    <li><BiBell /></li>
                    <li><BsChatDots /></li>
                    <li><AiOutlineHeart onClick={(e) => setLikedListShoes(!likedListShoes)} />
                        {(LikedShoes.length > 0) &&
                            <span className='Count'>{LikedShoes.length}</span>
                        }

                        {likedListShoes &&
                            <RecordBoxLiked />
                        }

                    </li>
                    <li><AiOutlineShoppingCart onClick={(e) => setCartListShoes(!cartListShoes)} />
                        {(CartShoes.length > 0) &&
                            <span className='Count'>{CartShoes.length}</span>
                        }

                        {cartListShoes &&
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
