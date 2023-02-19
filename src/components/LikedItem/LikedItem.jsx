import React from 'react';
import './LikedItem.css';
import { MdOutlineCancel } from 'react-icons/md';
import { ShoesContext } from '../../Context/Context';
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';



function LikedItem({ title, price, thumbnail, shoeId }) {

    let { LikedShoes, setLikedShoes } = useContext(ShoesContext);

    const removeLikedItem = () => {
        LikedShoes = LikedShoes.filter((l) => {
            if (l.shoeId !== shoeId) {
                return l;
            }
        });
        setLikedShoes(LikedShoes);
    }

    console.log(title, price, thumbnail, shoeId)

    return (
        <div className='likedItem'>

            <div className="likedItemRemove">
                <MdOutlineCancel className='removeIcon' onClick={removeLikedItem} />
            </div>

            <div className="likedItemImg">
                <img src={thumbnail} alt="item_image" />
            </div>

            <div className="likedItemAbout">
                <div className="likedItemTitle">
                    <Link to={`/shoe/${shoeId}`} className='link' >
                        {title}
                    </Link>
                </div>
            </div>

            <div className="likedItemPrice">
                ${price}
            </div>

        </div>
    );
}

export default LikedItem;