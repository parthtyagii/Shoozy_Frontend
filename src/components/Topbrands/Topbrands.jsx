import React from 'react';
import './Topbrands.css';
import IMAGE1 from '../../brandImages/nike_logo.jpg';
import IMAGE2 from '../../brandImages/adidas_logo.jpg';
import IMAGE3 from '../../brandImages/puma_logo.jpg';
import IMAGE4 from '../../brandImages/vans_logo.jpg';
import IMAGE5 from '../../brandImages/reebok_logo1.png';
import IMAGE6 from '../../brandImages/converse_logo.jpg';
import IMAGE7 from '../../brandImages/newbalance_logo1.jpg';




function Topbrands() {
    return (
        <div className='topbrandsContainer'>
            <h3>Top Brands</h3>
            <div className="shoeBrands">

                <div>
                    <img src={IMAGE1} alt="brand_image" />
                    <span className="brandName">Nike</span>
                </div>

                <div>
                    <img src={IMAGE2} alt="brand_image" />
                    <span className="brandName">Adidas</span>

                </div>

                <div>
                    <img src={IMAGE3} alt="brand_image" />
                    <span className="brandName">Puma</span>

                </div>

                <div>
                    <img src={IMAGE4} alt="brand_image" />
                    <span className="brandName">Vans</span>

                </div>

                <div>
                    <img src={IMAGE5} alt="brand_image" />
                    <span className="brandName">Reebok</span>
                </div>

                <div>
                    <img src={IMAGE6} alt="brand_image" />
                    <span className="brandName">Converse</span>
                </div>

                <div>
                    <img src={IMAGE7} alt="brand_image" />
                    <span className="brandName">New Balance</span>
                </div>

            </div>
        </div>
    );
}

export default Topbrands;