import React, { useState, useEffect } from 'react';
import './SearchPage.css'
import axios from 'axios';
import ClipLoader from 'react-spinners/ClipLoader';
import Shoe from '../Shoe/Shoe';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();




function SearchPage({ searched }) {

    const [loading, setLoading] = useState(true);
    const [searchedShoes, setSearchedShoes] = useState([]);

    const getSearchedShoes = async () => {
        try {
            setLoading(true);
            const response = await axios.post('http://localhost:5000/shoes', { data: searched });
            if (response) {
                setTimeout(() => {
                    setSearchedShoes(response.data);
                    setLoading(false);
                }, 1000);
            }
        }
        catch (e) {
            console.log('cannot seached!');
            console.log(e);
        }
    }

    useEffect(() => {

        getSearchedShoes();

    }, [searched]);


    return (
        <>
            {loading &&
                <div className='searchPageLoader'>
                    <ClipLoader color="#0014FF" size={60} />
                </div>
            }

            {!loading &&
                <div className='searchPageContainer' data-aos="fade-up" data-aos-duration="1000">
                    <div className="resultMessage">
                        Showing search results for <span>{`'${searched}'`}</span>
                    </div>

                    <div className="resultShoes">
                        {
                            searchedShoes.map((s) => {
                                return (
                                    <Shoe key={s._id} title={s.shoeName} desc={s.description} thumbnail={s.thumbnail} shoeId={s.styleID} price={s.retailPrice} />
                                );
                            })
                        }
                    </div>
                </div>
            }
        </>
    );
}

export default SearchPage;
