import React from 'react';
import './LikedItem.css';
import { MdOutlineCancel } from 'react-icons/md';



function LikedItem() {
    return (
        <div className='likedItem'>

            <div className="likedItemRemove">
                <MdOutlineCancel className='removeIcon' />
            </div>

            <div className="likedItemImg">
                <img src='https://pixlr.com/images/index/remove-bg.webp' alt="item_image" />
            </div>

            <div className="likedItemAbout">
                <div className="likedItemTitle">
                    Nike React Pegasus Trail 4 Men's Running Shoes
                </div>
            </div>

            <div className="likedItemPrice">
                $12,000
            </div>

        </div>
    );
}

export default LikedItem;