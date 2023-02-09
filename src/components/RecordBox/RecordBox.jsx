import React from 'react';
import './RecordBox.css';
import Item from '../../banner.jpg';



function RecordBox() {
    return (
        <div className='recordBoxContainer'>

            <div className="recordBoxUpper">
                Checkout Goods (3)
            </div>

            <div className="recordBoxMiddle">

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

export default RecordBox;
