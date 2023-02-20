import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import RecommendedShoes from '../../components/RecommendedShoes/RecommendedShoes';
import Topbrands from '../../components/Topbrands/Topbrands';
import HomepageFooter from '../../components/HomepageFooter/HomepageFooter';
import { useState, useEffect } from 'react';
import axios from 'axios';
import SyncLoader from 'react-spinners/SyncLoader';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();



function Homepage({ searched, setSearched }) {

    const [allShoes, setAllShoes] = useState(null);
    const [loading, setLoading] = useState(false);
    const [loadingMain, setLoadingMain] = useState(false);

    const getAllShoes = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`${process.env.REACT_APP_BACKEND}/shoesPopular`);
            if (response) {
                setTimeout(() => {
                    setAllShoes(response.data);
                    setLoading(false);
                }, 1000);
            }
        }
        catch (e) {
            console.log('cannot get all shoes!');
            console.log(e);
        }
    }

    useEffect(() => {

        getAllShoes();

    }, [])

    return (
        <>
            {loading && (
                <div className="loader">
                    <SyncLoader color="#0014FF" size={25} />
                </div>
            )}

            {!loading && (
                <div className='homepageContainer'>
                    <Navbar setSearched={setSearched} />
                    <Header />
                    <RecommendedShoes setAllShoes={setAllShoes} setLoadingMain={setLoadingMain} />
                    <Main allShoes={allShoes} loadingMain={loadingMain} />
                    <Topbrands />
                    <HomepageFooter />
                </div>
            )}
        </>
    );
}

export default Homepage;

