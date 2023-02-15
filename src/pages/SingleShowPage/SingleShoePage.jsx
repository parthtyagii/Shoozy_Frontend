import React from 'react';
import './SingleShoePage.css';
import { BsTruck } from 'react-icons/bs';
import { BiNotepad } from 'react-icons/bi';
import Navbar from '../../components/Navbar/Navbar';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';



function SingleShoePage() {

    const { id } = useParams();
    const [shoeInfo, setShoeInfo] = useState({});
    const [price, setPrice] = useState('');

    const getShoeInfo = async () => {
        try {
            const response = await axios.post('http://localhost:5000/shoesPrices', { data: id });
            console.log(response.data);
            setShoeInfo(response.data);
        }
        catch (e) {
            console.log('cannot get shoe info!');
            console.log(e);
        }
    }

    useEffect(() => {

        getShoeInfo();

    }, [])

    return (
        <>
            <Navbar />

            <div className='singleShoePageContainer'>

                <div className="shoeImage">
                    <img src={shoeInfo.thumbnail} alt="shoe_image" />
                </div>

                <div className="shoeDetails">

                    <div className="shoeAbout">
                        <h1>{shoeInfo.shoeName}</h1>
                        <div className="shoeInfo">
                            {shoeInfo.description}
                        </div>
                    </div>

                    <div className="shoePricing">
                        <h3>{`$${shoeInfo.retailPrice}`} or {`$${(shoeInfo.retailPrice / 12).toFixed(2)}/month`}</h3>
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
