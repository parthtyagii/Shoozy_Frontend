import React from 'react';
import './RecordBoxCart.css';
import Item from '../../banner.jpg';
import CheckoutItem from '../CheckoutItem/CheckoutItem';



function RecordBoxCart() {
    return (
        <div className='recordBoxContainer'>

            <div className="recordBoxUpper">
                Checkout Goods (3)
            </div>

            <div className="recordBoxMiddle">

                <CheckoutItem />
                <CheckoutItem />
                <CheckoutItem />
                <CheckoutItem />

            </div>

            <div className="recordBoxLower">
                <div className="billUP">
                    <span>Delivery</span>
                    <span>$ -</span>
                </div>

                <div className="billDown">
                    <span>Grand Total</span>
                    <span>$12,000</span>
                </div>
            </div>

            <div className="checkout">
                <button>CHECKOUT NOW</button>
            </div>

        </div>
    );
}

export default RecordBoxCart;
