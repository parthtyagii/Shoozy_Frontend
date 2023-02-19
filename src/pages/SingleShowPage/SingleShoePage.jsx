import React from 'react';
import './SingleShoePage.css';
import { BsTruck } from 'react-icons/bs';
import { BiNotepad } from 'react-icons/bi';
import Navbar from '../../components/Navbar/Navbar';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { ShoesContext } from '../../Context/Context';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import BeatLoader from "react-spinners/BeatLoader";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();



function SingleShoePage() {

    let { CartShoes, setCartShoes } = useContext(ShoesContext);

    const { id } = useParams();
    const [shoeInfo, setShoeInfo] = useState({});
    const [present, setPresent] = useState(false);
    const [loading, setLoading] = useState(true);
    const [showMessage, setShowMessage] = useState(false);


    const addToCart = () => {
        if (!present) {
            CartShoes = [...CartShoes, { shoeId: id, title: shoeInfo.title, desc: shoeInfo.desc, price: shoeInfo.price, thumbnail: shoeInfo.thumbnail, qty: 1 }]
            // console.log(CartShoes);
            setPresent(true);
            setCartShoes(CartShoes);
        }
    }

    const lessShoes = () => {
        if (present) {
            CartShoes = CartShoes.filter((c) => {
                if ((c.shoeId === id) && (c.qty > 1)) {
                    c.qty -= 1;
                    setShoeInfo(c);
                }
                return c;
            })
            setCartShoes(CartShoes);
        }
        else {
            setShowMessage(true);
            setTimeout(() => {
                setShowMessage(false);
            }, 2000);
        }
    }

    const moreShoes = () => {
        if (present) {
            CartShoes = CartShoes.filter((c) => {
                if (c.shoeId === id) {
                    c.qty += 1;
                    setShoeInfo(c);
                }
                return c;
            });
            setCartShoes(CartShoes);
        }
        else {
            setShowMessage(true);
            setTimeout(() => {
                setShowMessage(false);
            }, 2000);
        }
    }

    const getShoeInfo = async () => {
        try {
            const response = await axios.post('http://localhost:5000/shoesPrices', { data: id });
            // console.log(response.data);
            setTimeout(() => {
                setShoeInfo({ shoeId: id, title: response.data.shoeName, desc: response.data.description, price: response.data.retailPrice, thumbnail: response.data.thumbnail, qty: 1 });
                setLoading(false);
            }, 3000);
        }
        catch (e) {
            console.log('cannot get shoe info!');
            console.log(e);
        }
    }

    useEffect(() => {

        for (let i = 0; i < CartShoes.length; i++) {
            if (CartShoes[i].shoeId === id) {
                setPresent(true);
                break;
            }
        }

        getShoeInfo();
    }, []);

    useEffect(() => {
        let flag = false;
        for (let i = 0; i < CartShoes.length; i++) {
            if (CartShoes[i].shoeId === id) {
                flag = true;
            }
        }

        if (!flag) {
            setCartShoes(CartShoes);
            setPresent(false);
        }
    }, [CartShoes]);


    return (
        <>
            <Navbar />

            {loading &&
                <div className="loader">
                    <BeatLoader color="#0014FF" />
                </div>
            }

            {!loading &&

                <div className='singleShoePageContainer' data-aos="fade-up" data-aos-duration="1000">

                    <div className="shoeImage">
                        <img src={shoeInfo.thumbnail} alt="shoe_image" />
                    </div>

                    <div className="shoeDetails">

                        <div className="shoeAbout">
                            <h1>{shoeInfo.title}</h1>
                            <div className="shoeInfo">
                                {shoeInfo.desc}
                            </div>
                        </div>

                        <div className="shoePricing">
                            <h3>{`$${shoeInfo.price}`} or {`$${(shoeInfo.price / 12).toFixed(2)}/month`}</h3>
                            <div className="shoePricingMessage">
                                Suggest payments with 12 months special financing
                            </div>
                        </div>

                        <div className="shoePairs">
                            <div className="shoePairsCount">
                                <button onClick={moreShoes}>+</button>
                                <span>{present ? shoeInfo.qty : 0}</span>
                                <button onClick={lessShoes}>-</button>
                            </div>
                            <div className="shoePairsCountMessage">
                                <span>Only 12 items left!</span>
                                <span>Don't miss it</span>
                            </div>
                        </div>

                        <div className="shoeBuyOrAdd">
                            <Link to='/checkout' className='link'>
                                <button className="Buy">But Now</button>
                            </Link>
                            <button className="Add" onClick={addToCart}>Add to Cart</button>
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
            }

            {showMessage &&
                <div className="message">
                    First add to cart!
                </div>
            }

        </>
    );
}

export default SingleShoePage;
