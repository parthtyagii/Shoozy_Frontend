import React from 'react';
import './SingleShoePage.css';
import { BsTruck } from 'react-icons/bs';
import { BiNotepad } from 'react-icons/bi';
import Navbar from '../../components/Navbar/Navbar';



function SingleShoePage() {
    return (
        <>
            <Navbar />

            <div className='singleShoePageContainer'>

                <div className="shoeImage">
                    <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4cc0229f-6476-482e-bd73-0461ec464f7f/react-infinity-3-road-running-shoes-1W741N.png" alt="shoe_image" />
                </div>

                <div className="shoeDetails">

                    <div className="shoeAbout">
                        <h1>Nike React Pegasus Trail 4 Men's Running Shoes</h1>
                        <div className="shoeInfo">
                            Men's Running Windrunner Jacket
                        </div>
                    </div>

                    <div className="shoePricing">
                        <h3>$6,000 or $500/month</h3>
                        <div className="shoePricingMessage">
                            Suggest payments with 12 months special financing
                        </div>
                    </div>

                    <div className="shoePairs">
                        <div className="shoePairsCount">
                            <button>+</button>
                            <span>3</span>
                            <button>-</button>
                        </div>
                        <div className="shoePairsCountMessage">
                            <span>Only 12 items left!</span>
                            <span>Don't miss it</span>
                        </div>
                    </div>

                    <div className="shoeBuyOrAdd">
                        <button className="Buy">But Now</button>
                        <button className="Add">Add to Cart</button>
                    </div>

                    <div className="customerService">
                        <div className="delivery">
                            <BsTruck className='deliveryIcon' />
                            <h4>Free Delivery</h4>
                            <div>Enter your Postal code for Delivery Availability</div>
                        </div>

                        <div className="delivery">
                            <BiNotepad className='deliveryIcon' />
                            <h4>Return Delivery</h4>
                            <div>Free 30days Delivery Returns. <span>Details</span></div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
}

export default SingleShoePage;
