import React from 'react';
import './CheckoutPage.css';
import Navbar from '../../components/Navbar/Navbar';
import { AiFillCaretDown } from 'react-icons/ai';
import { AiFillCaretUp } from 'react-icons/ai';
import { ShoesContext } from '../../Context/Context';
import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CheckoutPageItem from '../../components/CheckoutPageItem/CheckoutPageItem';





function CheckoutPage() {

    let { CartShoes, setCartShoes } = useContext(ShoesContext);
    let [totalBill, setTotalBill] = useState(0);

    useEffect(() => {
        let t = 0;
        for (let i = 0; i < CartShoes.length; i++) {
            t = t + (CartShoes[i].price * CartShoes[i].qty);
        }
        setTotalBill(t);
    }, [CartShoes])

    return (
        <>
            <Navbar />

            <div className='checkoutPageContainer'>

                <div className="checkoutPageLeftSide">

                    {/* above part... */}

                    <div className="reviewAndShipping">

                        <h2>Review Item and Shipping</h2>

                        <div className="lowerPart">

                            {(CartShoes.length > 0) &&
                                CartShoes.map((c) => {
                                    return (
                                        <CheckoutPageItem key={c.shoeId} shoeId={c.shoeId} title={c.title} price={c.price} qty={c.qty} thumbnail={c.thumbnail} />
                                    );
                                })
                            }

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
                                    <input type="radio" name='payment' value="creditDebit" id='4' />
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
                                <span>${totalBill}</span>
                            </div>

                            <div>
                                <span>Tax (10%)</span>
                                <span>-${totalBill / 10}</span>
                            </div>

                            <div>
                                <span>Coupon Discount</span>
                                <span>-$0</span>
                            </div>

                            <div>
                                <span>Shipping Cost</span>
                                <span>-${totalBill / 8}</span>
                            </div>

                            <div>
                                <span>Total</span>
                                <span>=${(totalBill) + (totalBill / 10) + (totalBill / 8)}</span>
                            </div>
                        </div>

                        <div className="orderPay">
                            <button className="pay">Pay ${(totalBill) + (totalBill / 10) + (totalBill / 8)}</button>
                        </div>

                    </div>

                </div>

            </div>
        </>
    );
}

export default CheckoutPage;
