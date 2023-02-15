import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import RecommendedShoes from '../../components/RecommendedShoes/RecommendedShoes';
import Topbrands from '../../components/Topbrands/Topbrands';
import HomepageFooter from '../../components/HomepageFooter/HomepageFooter';
import { useState, useEffect } from 'react';
import axios from 'axios';





function Homepage() {

    const [allShoes, setAllShoes] = useState([]);

    const getAllShoes = async () => {
        try {
            const response = await axios.get('http://localhost:5000/shoesPopular');
            // console.log(response.data);
            setAllShoes(response.data);
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
        <div className='homepageContainer'>
            <Navbar />
            <Header />
            <RecommendedShoes setAllShoes={setAllShoes} />
            <Main allShoes={allShoes}/>
            <Topbrands />
            <HomepageFooter />
        </div>
    );
}

export default Homepage;

