import React from 'react';
import './CheckoutItem.css';
import { useEffect, useContext } from 'react';
import { ShoesContext } from '../../Context/Context';
import { MdOutlineCancel } from 'react-icons/md';
import { Link } from 'react-router-dom';




function CheckoutItem({ title, price, qty, thumbnail, shoeId }) {

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
        <div className="item">

            <div className="cartItemRemove">
                <MdOutlineCancel className='cartRemoveIcon' onClick={removeFromCart} />
            </div>

            <div className="itemImg">
                <img src={thumbnail} alt="item_image" />
            </div>
            <div className="itemAbout">
                <div className="itemTitle">
                    <Link to={`/shoe/${shoeId}`} className='link'>
                        {title}
                    </Link>
                </div>

                <div className="itemCount">
                    <button onClick={moreShoes}>+</button>
                    <span className="count">{qty}</span>
                    <button onClick={lessShoes}>-</button>
                </div>
            </div>
            <div className="itemPrice">
                ${price}
            </div>

        </div>
    );
}

export default CheckoutItem;
