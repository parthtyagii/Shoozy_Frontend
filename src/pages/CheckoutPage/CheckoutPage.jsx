import React from 'react';
import './CheckoutPage.css';
import { AiFillCaretDown } from 'react-icons/ai';
import { AiFillCaretUp } from 'react-icons/ai';
import Navbar from '../../components/Navbar/Navbar';





function CheckoutPage() {
    return (
        <>
            <Navbar />

            <div className='checkoutPageContainer'>

                <div className="checkoutPageLeftSide">

                    {/* above part... */}

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
                                <i className="fa-solid fa-xmark"></i>
                            </button>
                        </div>

                    </div>

                    {/* bottom part... */}

                    <div className="deliveryInformation">

                        <h2>Delivery Information</h2>

                        <div className="customerName">
                            <div className='customerInfo'>
                                <label>First Name *</label>
                                <input type="text" name='firstName' placeholder='Type here...' />
                            </div>

                            <div className='customerInfo'>
                                <label>Last Name *</label>
                                <input type="text" name='lastName' placeholder='Type here...' />
                            </div>
                        </div>

                        <div className="address customerInfo">
                            <label>Address *</label>
                            <input type="text" name="address" placeholder='Type here...' />
                        </div>

                        <div className="city">
                            <div className='customerInfo'>
                                <label>City / Town *</label>
                                <input type="text" name="city" placeholder='Type here...' />
                            </div>

                            <div className='customerInfo'>
                                <label>Zip Code *</label>
                                <input type="text" name="zip" placeholder='Type here...' />
                            </div>
                        </div>

                        <div className="customerId">
                            <div className='customerInfo'>
                                <label>Mobile *</label>
                                <input type="text" name="mobile" placeholder='Type here...' />
                            </div>

                            <div className='customerInfo'>
                                <label>Email *</label>
                                <input type="text" name="email" placeholder='Type here...' />
                            </div>
                        </div>

                    </div>

                </div>


                {/* --------------------------------------------------------------------------------- */}

                <div className="checkoutPageRightSide">

                    <div className="orderSummary">

                        <h2>Order Summary</h2>

                        <div className="couponCode">
                            <input type="text" name="coupon" placeholder='Enter Coupon Code' />
                            <button>Apply Coupon</button>
                        </div>

                        <div className="paymentDetails">

                            <h4>Payment Details</h4>

                            <div className="paymentMethods">
                                <div>
                                    <input type="radio" name='payment' value="cash" id='1' />
                                    <label htmlFor='1'>Cash on Delivery</label>
                                </div>

                                <div>
                                    <input type="radio" name='payment' value="shopcart" id='2' />
                                    <label htmlFor='2'>Shopcart Card</label>
                                </div>

                                <div>
                                    <input type="radio" name='payment' value="paypal" id='3' />
                                    <label htmlFor='3'>Paypal</label>
                                </div>

                                <div>
                                    <input type="radio" name='payment' value="creditDebit" id='4' checked={true} />
                                    <label htmlFor='4'>Credit or Debit card</label>
                                </div>

                                <div className="cardImages">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Old_Visa_Logo.svg/2560px-Old_Visa_Logo.svg.png" alt="card_image" />
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/2560px-MasterCard_Logo.svg.png" alt="card_image" />
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Rupay-Logo.png" alt="card_image" />
                                </div>

                            </div>
                        </div>

                        <div className="cardDetails">
                            <div>
                                <label>Email *</label>
                                <input type="text" placeholder='Type here...' />
                            </div>

                            <div>
                                <label>Card Holder Name *</label>
                                <input type="text" placeholder='Type here...' />
                            </div>

                            <div>
                                <label>Card Number *</label>
                                <input type="text" placeholder='Type here...' />
                            </div>

                            <div>
                                <div className="expiry">
                                    <label>Expiry *</label>
                                    <input type="text" placeholder='Type here...' />
                                </div>

                                <div className="cvc">
                                    <label>CVC *</label>
                                    <input type="text" placeholder='Type here...' />
                                </div>
                            </div>
                        </div>

                        <div className="billingAmount">
                            <div>
                                <span>Sub Total</span>
                                <span>$549</span>
                            </div>

                            <div>
                                <span>Tax (10%)</span>
                                <span>-$54</span>
                            </div>

                            <div>
                                <span>Coupon Discount</span>
                                <span>-$54</span>
                            </div>

                            <div>
                                <span>Shipping Cost</span>
                                <span>-$0</span>
                            </div>

                            <div>
                                <span>Total</span>
                                <span>=$449</span>
                            </div>
                        </div>

                        <div className="orderPay">
                            <button className="pay">Pay $449</button>
                        </div>

                    </div>

                </div>

            </div>
        </>
    );
}

export default CheckoutPage;
