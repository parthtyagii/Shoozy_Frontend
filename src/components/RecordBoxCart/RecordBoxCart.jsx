import React from 'react';
import './RecordBoxCart.css';
import Item from '../../banner.jpg';
import CheckoutItem from '../CheckoutItem/CheckoutItem';
import { ShoesContext } from '../../Context/Context';
import { useState, useContext, useEffect } from 'react';



function RecordBoxCart() {

    let { CartShoes, setCartShoes } = useContext(ShoesContext);
    let [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        let t = 0;
        for (let i = 0; i < CartShoes.length; i++) {
            t = t + (CartShoes[i].price * CartShoes[i].qty);
        }
        setTotalPrice(t);
    }, [CartShoes]);

    return (
        <div className='recordBoxContainer'>

            <div className="recordBoxUpper">
                Checkout Goods ({CartShoes.length})
            </div>

            <div className="recordBoxMiddle">

                {CartShoes.map((c) => {
                    return (
                        <CheckoutItem key={c.shoeId} shoeId={c.shoeId} title={c.title} price={c.price} qty={c.qty} thumbnail={c.thumbnail} />
                    );
                })}

            </div>

            <div className="recordBoxLower">
                <div className="billUP">
                    <span>Delivery</span>
                    <span>$ -</span>
                </div>

                <div className="billDown">
                    <span>Grand Total</span>
                    <span>{totalPrice}</span>
                </div>
            </div>

            <div className="checkout">
                {(totalPrice !== 0) &&
                    <button>CHECKOUT NOW</button>
                }
            </div>

        </div>
    );
}

export default RecordBoxCart;
