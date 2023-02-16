import React from 'react';
import './Shoe.css';
import { AiFillHeart } from 'react-icons/ai';
import { FiShoppingBag } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useContext, useRef, useEffect, useState } from 'react';
import { ShoesContext } from '../../Context/Context.js';



function Shoe({ title, desc, thumbnail, shoeId }) {

    let { LikedShoes, setLikedShoes, CartShoes, setCartShoes } = useContext(ShoesContext);
    let [heart, setHeart] = useState(false);
    let [addCart, setAddCart] = useState(false);


    const clickedAddCart = () => {
        if (!addCart) {
            CartShoes = [...CartShoes, { id: shoeId, qty: 1 }];
            setCartShoes(CartShoes);
        }
        else {
            CartShoes = CartShoes.filter((c) => {
                if (c.id !== shoeId) {
                    return c;
                }
            });
            setCartShoes(CartShoes);
        }
    }

    const clickedAddLiked = () => {
        if (!heart) {
            LikedShoes = [...LikedShoes, { id: shoeId }];
            setLikedShoes(LikedShoes);
        }
        else {
            LikedShoes = LikedShoes.filter((c) => {
                if (c.id !== shoeId) {
                    return c;
                }
            });
            setLikedShoes(LikedShoes);
        }
    }

    useEffect(() => {

        let cart_me_hai = false;
        for (let i = 0; i < CartShoes.length; i++) {
            if (CartShoes[i].id === shoeId) {
                cart_me_hai = true;
            }
        }
        if (cart_me_hai) {
            setAddCart(true);
        }
        else {
            setAddCart(false);
        }
        console.log(CartShoes);


        let liked_hai = false;
        for (let i = 0; i < LikedShoes.length; i++) {
            if (LikedShoes[i].id === shoeId) {
                liked_hai = true;
            }
        }
        if (liked_hai) {
            setHeart(true);
        }
        else {
            setHeart(false);
        }

    }, [CartShoes, LikedShoes]);


    return (
        <div className='shoeContainer'>
            <div className="shoeUpperPart">
                <div className="shoeImg">
                    <img src={thumbnail} alt="shoe_image" />
                </div>

                <span onClick={clickedAddLiked} style={heart ? { backgroundColor: '#f43fa026', border: '1px solid #f43fa026' } : {}} className='shoeHeartIconContainer'>
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
                        <span onClick={clickedAddCart} style={addCart ? { backgroundColor: '#0014FF', color: 'white', border: '1px solid #0014FF' } : {}}>
                            <FiShoppingBag className='shoePriceIcon' />
                        </span>
                    </div>

                </div>
            </div>

        </div >
    );
}

export default Shoe;
