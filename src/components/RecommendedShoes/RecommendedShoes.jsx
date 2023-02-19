import React from 'react';
import './RecommendedShoes.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function RecommendedShoes({ setAllShoes }) {

    const getBrandShoes = async (targetName) => {
        try {
            if (targetName !== 'all') {
                const response = await axios.post('http://localhost:5000/shoes', { data: targetName });
                setAllShoes(response.data);
            }
            else {
                const response = await axios.get('http://localhost:5000/shoesPopular', { data: targetName });
                setAllShoes(response.data);
            }
        }
        catch (e) {
            console.log('cannot get brand shoes!');
            console.log(e);
        }
    }

    return (
        <div className='recommendedShoesContainer' data-aos="fade-up" data-aos-duration="1000">
            <h3>Recommeded Shoes</h3>
            <div className="brandOptions">
                <button name='all' onClick={(e) => getBrandShoes(e.target.name)}>All Products</button>
                <button name='Nike' onClick={(e) => getBrandShoes(e.target.name)}>Nike</button>
                <button name='Adidas' onClick={(e) => getBrandShoes(e.target.name)}>Adidas</button>
                <button name='Puma' onClick={(e) => getBrandShoes(e.target.name)}>Puma</button>
                <button name='Vans' onClick={(e) => getBrandShoes(e.target.name)}>Vans</button>
                <button name='Reebok' onClick={(e) => getBrandShoes(e.target.name)}>Reebok</button>
                <button name='Converse' onClick={(e) => getBrandShoes(e.target.name)}>Converse</button>
                <button name='New Balance' onClick={(e) => getBrandShoes(e.target.name)}>New Balance</button>
            </div>
        </div>
    );
}

export default RecommendedShoes;
