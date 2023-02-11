import React from 'react';
import './SingleShoePage.css';



function SingleShoePage() {
    return (
        <div className='singleShoePageContainer'>

            <div className="shoeImage">
                <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4cc0229f-6476-482e-bd73-0461ec464f7f/react-infinity-3-road-running-shoes-1W741N.png" alt="shoe_image" />
            </div>

            <div className="shoeDetails">

                <div className="shoeAbout">
                    <h1>Nike Shoe</h1>
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

            </div>

        </div>
    );
}

export default SingleShoePage;
