import React from 'react';
import './CheckoutPageItem.css';
import { AiFillCaretDown } from 'react-icons/ai';
import { AiFillCaretUp } from 'react-icons/ai';
import { ShoesContext } from '../../Context/Context';
import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



function CheckoutPageItem({ shoeId, title, price, qty, thumbnail }) {

    let { CartShoes, setCartShoes } = useContext(ShoesContext);


    const moreShoes = () => {
        CartShoes = CartShoes.filter((c) => {
            if (c.shoeId === shoeId) {
                c.qty += 1;
            }
            return c;
        });
        setCartShoes(CartShoes);
    }

    const lessShoes = () => {
        CartShoes = CartShoes.filter((c) => {
            if ((c.shoeId === shoeId) && (c.qty > 1)) {
                c.qty -= 1;
            }
            return c;
        })
        setCartShoes(CartShoes);
    }

    const removeFromCart = () => {
        CartShoes = CartShoes.filter((c) => {
            if (c.shoeId !== shoeId) {
                return c;
            }
        })
        setCartShoes(CartShoes);
    }

    return (
        <div className="checkoutPageItem">
            <div className="itemImg">
                <img src={thumbnail} alt="item_image" />
            </div>

            <div className="itemInfo">
                <div className="itemTitle">
                    <Link to={`/shoe/${shoeId}`} className='link'>
                        {title}
                    </Link>
                </div>
                <div className="itemQty">
                    Qty : {qty}
                    <div className="itemQtyButtons">
                        <button onClick={moreShoes}><AiFillCaretUp /></button>
                        <button onClick={lessShoes}><AiFillCaretDown /></button>
                    </div>
                </div>
            </div>

            <div className="itemPricingInfo">
                ${price}
            </div>

            <button className='removeItem' onClick={removeFromCart}>
                <i className="fa-solid fa-xmark"></i>
            </button>
        </div>
    );
}

export default CheckoutPageItem;
