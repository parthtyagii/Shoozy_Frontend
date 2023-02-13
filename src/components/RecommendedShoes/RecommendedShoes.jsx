import React from 'react';
import './RecommendedShoes.css';



function RecommendedShoes() {
    return (
        <div className='recommendedShoesContainer'>
            <h3>Recommeded Shoes</h3>
            <div className="brandOptions">
                <button>All Products</button>
                <button>Nike</button>
                <button>Adidas</button>
                <button>Puma</button>
                <button>Vans</button>
                <button>Reebok</button>
                <button>Converse</button>
                <button>New Balance</button>
            </div>
        </div>
    );
}

export default RecommendedShoes;
