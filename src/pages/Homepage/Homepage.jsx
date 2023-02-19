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





function Homepage() {

    const [allShoes, setAllShoes] = useState([]);
    const [loading, setLoading] = useState(true);

    const getAllShoes = async () => {
        try {
            const response = await axios.get('http://localhost:5000/shoesPopular');
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
                    <SyncLoader color="#0014FF" />
                </div>
            )}

            {!loading && (
                <div className='homepageContainer'>
                    <Navbar />
                    <Header />
                    <RecommendedShoes setAllShoes={setAllShoes} />
                    <Main allShoes={allShoes} />
                    <Topbrands />
                    <HomepageFooter />
                </div>
            )}
        </>
    );
}

export default Homepage;

