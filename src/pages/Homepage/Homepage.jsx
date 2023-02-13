import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import RecommendedShoes from '../../components/RecommendedShoes/RecommendedShoes';
import Topbrands from '../../components/Topbrands/Topbrands';





function Homepage() {
    return (
        <div className='homepageContainer'>
            <Navbar />
            <Header />
            <RecommendedShoes />
            <Main />
            <Topbrands />
        </div>
    );
}

export default Homepage;

