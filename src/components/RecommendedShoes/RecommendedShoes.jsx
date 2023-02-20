import React from 'react';
import './RecommendedShoes.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const STYLE = {
    backgroundColor: '#0014FF',
    border: '1px solid #0014FF',
    color: 'white'
}

function RecommendedShoes({ setAllShoes, setLoadingMain }) {

    let [shoeBrand, setShoeBrand] = useState('all');


    const getBrandShoes = async (targetName) => {
        try {
            setLoadingMain(true);
            if (targetName !== 'all') {
                const response = await axios.post('http://localhost:5000/shoes', { data: targetName });
                if (response) {
                    setTimeout(() => {
                        setAllShoes(response.data);
                        setLoadingMain(false);
                    }, 1000);
                }
            }
            else {
                const response = await axios.get('http://localhost:5000/shoesPopular', { data: targetName });
                if (response) {
                    setTimeout(() => {
                        setAllShoes(response.data);
                        setLoadingMain(false);
                    }, 1000);
                }
            }
        }
        catch (e) {
            console.log('cannot get brand shoes!');
            console.log(e);
        }
    }

    const selectedBrand = (e) => {
        const brand = e.target.name;
        setShoeBrand(brand);
        getBrandShoes(brand);
    }

    useEffect(() => {
        setShoeBrand('all');
    }, [])

    return (
        <div className='recommendedShoesContainer' data-aos="fade-up" data-aos-duration="1000">
            <h3>Recommeded Shoes</h3>
            <div className="brandOptions">
                <button name='all' onClick={selectedBrand} style={(shoeBrand === 'all') ? STYLE : {}}>All Products</button>
                <button name='Nike' onClick={selectedBrand} style={(shoeBrand === 'Nike') ? STYLE : {}}>Nike</button>
                <button name='Adidas' onClick={selectedBrand} style={(shoeBrand === 'Adidas') ? STYLE : {}}>Adidas</button>
                <button name='Puma' onClick={selectedBrand} style={(shoeBrand === 'Puma') ? STYLE : {}}>Puma</button>
                <button name='Vans' onClick={selectedBrand} style={(shoeBrand === 'Vans') ? STYLE : {}}>Vans</button>
                <button name='Reebok' onClick={selectedBrand} style={(shoeBrand === 'Reebok') ? STYLE : {}}>Reebok</button>
                <button name='Converse' onClick={selectedBrand} style={(shoeBrand === 'Converse') ? STYLE : {}}>Converse</button>
                <button name='New Balance' onClick={selectedBrand} style={(shoeBrand === 'New Balance') ? STYLE : {}}>New Balance</button>
            </div>
        </div >
    );
}

export default RecommendedShoes;
