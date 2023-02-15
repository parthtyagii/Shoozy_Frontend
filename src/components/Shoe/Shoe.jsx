import React from 'react';
import './Shoe.css';
import { AiFillHeart } from 'react-icons/ai';
import { FiShoppingBag } from 'react-icons/fi';
import { Link } from 'react-router-dom';





function Shoe({ title, desc, thumbnail, shoeId }) {
    return (
        <div className='shoeContainer'>
            <div className="shoeUpperPart">
                <div className="shoeImg">
                    <img src={thumbnail} alt="shoe_image" />
                </div>

                <span className='shoeHeartIconContainer'>
                    <AiFillHeart className='shoeHeartIcon' />
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
                        <span>
                            <FiShoppingBag className='shoePriceIcon' />
                        </span>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default Shoe;
