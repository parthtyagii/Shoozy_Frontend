import React from 'react';
import './Shoe.css';
import { AiFillHeart } from 'react-icons/ai';
import { FiShoppingBag } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useContext, useRef, useEffect, useState } from 'react';
import { ShoesContext } from '../../Context/Context.js';



function Shoe({ title, desc, thumbnail, shoeId }) {

    const { liked, setLiked, cart, setCart } = useContext(ShoesContext);
    const [heart, setHeart] = useState(false);
    const [addCart, setAddCart] = useState(false);

    return (
        <div className='shoeContainer'>
            <div className="shoeUpperPart">
                <div className="shoeImg">
                    <img src={thumbnail} alt="shoe_image" />
                </div>

                <span style={heart ? { backgroundColor: '#f43fa026', border: '1px solid #f43fa026' } : {}} onClick={(e) => { setHeart(!heart) }} className='shoeHeartIconContainer'>
                    <AiFillHeart style={heart ? { color: '#f40785' } : {}} className='shoeHeartIcon' />
                </span>
            </div>

            <div className="shoeLowerPart">
                <div className="shoeAbout">
                    <Link to={`/shoe/${shoeId}`} className='link'>
                        <div className="shoeDesc">
                            {/* {desc} */}
                        </div>

                        <div className="shoeTitle">
                            {title}
                        </div>
                    </Link>

                    <div className="shoePrice">
                        <span>$12,000</span>
                        <span onClick={(e) => { setAddCart(!addCart) }} style={addCart ? { backgroundColor: '#0014FF', color: 'white', border: '1px solid #0014FF' } : {}}>
                            <FiShoppingBag onClick={(e) => { setAddCart(!addCart) }} className='shoePriceIcon' />
                        </span>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default Shoe;
