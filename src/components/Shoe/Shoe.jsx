import React from 'react';
import './Shoe.css';
import { AiFillHeart } from 'react-icons/ai';
import { FiShoppingBag } from 'react-icons/fi';





function Shoe() {
    return (
        <div className='shoeContainer'>
            <div className="shoeUpperPart">
                <div className="shoeImg">
                    <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4cc0229f-6476-482e-bd73-0461ec464f7f/react-infinity-3-road-running-shoes-1W741N.png" alt="shoe_image" />
                </div>

                <span className='shoeHeartIconContainer'>
                    <AiFillHeart className='shoeHeartIcon' />
                </span>
            </div>

            <div className="shoeLowerPart">
                <div className="shoeAbout">
                    <div className="shoeDesc">
                        Men's Running Windrunner Jacket
                    </div>

                    <div className="shoeTitle">
                        Nike React Pegasus Trail 4 Men's Running Shoes
                    </div>

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
