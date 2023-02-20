import React, { useState, useEffect, useContext } from 'react';
import './SearchPage.css'
import { ShoesContext } from '../../Context/Context';
import axios from 'axios';
import ClipLoader from 'react-spinners/ClipLoader';
import Shoe from '../../components/Shoe/Shoe';
import Navbar from '../../components/Navbar/Navbar';
import HomepageFooter from '../../components/HomepageFooter/HomepageFooter';
import Topbrands from '../../components/Topbrands/Topbrands';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function SearchPage() {

    let { searched, setSearched } = useContext(ShoesContext);
    const [searchedShoes, setSearchedShoes] = useState([]);
    const [loading, setLoading] = useState(false);

    const getSearchedShoes = async () => {
        try {
            setLoading(true);
            const response = await axios.post(`${process.env.REACT_APP_BACKEND}/shoes`, { data: searched });
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
            <Navbar />

            {loading &&
                <div className='searchPageLoader'>
                    <ClipLoader color="#0014FF" size={60} />
                </div>
            }

            {!loading && (
                <>

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

                    <Topbrands />

                    <HomepageFooter />
                </>)
            }
        </>
    );
}

export default SearchPage;
