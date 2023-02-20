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
import { useNavigate } from "react-router-dom";


function Navbar() {

    let { LikedShoes, setLikedShoes, CartShoes, setCartShoes, searched, setSearched } = useContext(ShoesContext);

    const [likedListShoes, setLikedListShoes] = useState(false);
    const [cartListShoes, setCartListShoes] = useState(false);
    const [searchWord, setSearchWord] = useState('');
    const navigate = useNavigate();

    const searching = (e) => {
        if ((e.key === 'Enter') && (searchWord !== '')) {
            setSearched(searchWord);
            navigate(`/search/${searchWord}`);
        }
    }

    return (
        <div className="navContainer">

            <div className="leftPart">
                <div className="navLogoImg">
                    <Link to='/' className='link'>
                        <img src={logoImg} alt="logo_img" />
                    </Link>
                </div>

                <div className="userSearch">
                    <input type="text" value={searchWord} onChange={(e) => setSearchWord(e.target.value)} onKeyDown={(e) => searching(e)} name="user_search" id="user_search" placeholder='Search Shoe' autoComplete='off' required />
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
                        </select>
                    </li>
                    <li>
                        <a href='https://www.linkedin.com/in/parth-tyagi-0724a81b7/' className='link'>
                            Contact us
                        </a>
                    </li>
                    <li>
                        <a href='https://github.com/parthtyagii/Shoozy_Frontend' className='link'>
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
                    <img src="https://res.cloudinary.com/dw0up71e2/image/upload/v1676901944/-lag3vi_ewidiz.jpg" alt="profile_image" />
                </div>

            </div>

        </div>
    );
}

export default Navbar;
