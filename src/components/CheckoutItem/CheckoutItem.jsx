import React from 'react';
import './CheckoutItem.css';

function CheckoutItem() {
    return (
        <div className="item">

            <input type="checkbox" className='checkBox' />
            <div className="itemImg">
                <img src='https://pixlr.com/images/index/remove-bg.webp' alt="item_image" />
            </div>
            <div className="itemAbout">
                <div className="itemTitle">
                    Nike React Pegasus Trail 4 Men's Running Shoes
                </div>

                <div className="itemCount">
                    <button>+</button>
                    <span className="count">3</span>
                    <button>-</button>
                </div>
            </div>
            <div className="itemPrice">
                $12,000
            </div>

        </div>
    );
}

export default CheckoutItem;
