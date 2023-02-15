import React from 'react';
import './RecommendedShoes.css';
import { useState, useEffect } from 'react';
import axios from 'axios';



function RecommendedShoes({ setAllShoes }) {

    const getBrandShoes = async (targetName) => {
        try {
            if (targetName !== 'all') {
                const response = await axios.post('http://localhost:5000/shoes', { data: targetName });
                // console.log(response.data);
                setAllShoes(response.data);
            }
            else {
                const response = await axios.get('http://localhost:5000/shoesPopular', { data: targetName });
                // console.log(response.data);
                setAllShoes(response.data);
            }
        }
        catch (e) {
            console.log('cannot get brand shoes!');
            console.log(e);
        }
    }


    return (
        <div className='recommendedShoesContainer'>
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
