import React from 'react';
import './RecordBoxLiked.css';
import LikedItem from '../LikedItem/LikedItem';
import { ShoesContext } from '../../Context/Context';
import { useState, useContext, useEffect } from 'react';




function RecordBoxLiked() {

    const { LikedShoes, setLikedShoes } = useContext(ShoesContext);

    return (
        <div className='recordBoxLikedContainer'>
            <div className="recordBoxLikedUpper">
                Liked Goods ({LikedShoes.length})
            </div>

            <div className="recordBoxLikedLower">

                {LikedShoes.map((l) => {
                    return (
                        <LikedItem key={l.shoeId} shoeId={l.shoeId} title={l.title} price={l.price} thumbnail={l.thumbnail} />
                    );
                })}

            </div>

        </div>
    );
}

export default RecordBoxLiked;
