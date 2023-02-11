import React from 'react';
import './RecordBoxLiked.css';
import LikedItem from '../LikedItem/LikedItem';





function RecordBoxLiked() {
    return (
        <div className='recordBoxLikedContainer'>
            <div className="recordBoxLikedUpper">
                Liked Goods (3)
            </div>

            <div className="recordBoxLikedLower">
                <LikedItem />
                <LikedItem />
                <LikedItem />
                <LikedItem />
                <LikedItem />
            </div>

        </div>
    );
}

export default RecordBoxLiked;
