import React from 'react';
import './CheckoutPage.css';
import { AiFillCaretDown } from 'react-icons/ai';
import { AiFillCaretUp } from 'react-icons/ai';





function CheckoutPage() {
    return (
        <div className='checkoutPageContainer'>

            <div className="checkoutPageLeftSide">

                <div className="reviewAndShipping">

                    <h2>Review Item and Shipping</h2>

                    <div className="checkoutPageItem">
                        <div className="itemImg">
                            <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4cc0229f-6476-482e-bd73-0461ec464f7f/react-infinity-3-road-running-shoes-1W741N.png" alt="item_image" />
                        </div>

                        <div className="itemInfo">
                            <div className="itemTitle">Nike React Pegasus Trail 4 Men's Running Shoes</div>
                            <div className="itemDesc">Men's Running Windrunner Jacket</div>
                            <div className="itemQty">
                                Qty : 3
                                <div className="itemQtyButtons">
                                    <button><AiFillCaretUp /></button>
                                    <button><AiFillCaretDown /></button>
                                </div>
                            </div>
                        </div>

                        <div className="itemPricingInfo">
                            $12,000
                        </div>

                        <button className='removeItem'>
                            <i class="fa-solid fa-xmark"></i>
                        </button>
                    </div>

                </div>

                {/* ----------------------------------------------------------------------------------- */}

                <div className="deliveryInformation">

                </div>

            </div>

            <div className="checkoutPageRightSide">

                <div className="orderSummary">

                </div>

            </div>

        </div>
    );
}

export default CheckoutPage;
