import React from 'react';
import './Topbrands.css';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function Topbrands() {
    return (
        <div className='topbrandsContainer' data-aos="fade-up" data-aos-duration="1000">
            <h3>Top Brands</h3>
            <div className="shoeBrands">

                <div>
                    <img src='https://res.cloudinary.com/dw0up71e2/image/upload/v1676912229/nike_logo_smtxmm.jpg' alt="brand_image" />
                    <span className="brandName">Nike</span>
                </div>

                <div>
                    <img src='https://res.cloudinary.com/dw0up71e2/image/upload/v1676912195/adidas_logo_mxx0gr.jpg' alt="brand_image" />
                    <span className="brandName">Adidas</span>

                </div>

                <div>
                    <img src='https://res.cloudinary.com/dw0up71e2/image/upload/v1676912238/puma_logo_jhbve2.jpg' alt="brand_image" />
                    <span className="brandName">Puma</span>

                </div>

                <div>
                    <img src='https://res.cloudinary.com/dw0up71e2/image/upload/v1676912253/vans_logo_hd08dn.jpg' alt="brand_image" />
                    <span className="brandName">Vans</span>

                </div>

                <div>
                    <img src='https://res.cloudinary.com/dw0up71e2/image/upload/v1676912250/reebok_logo1_s2c817.png' alt="brand_image" />
                    <span className="brandName">Reebok</span>
                </div>

                <div>
                    <img src='https://res.cloudinary.com/dw0up71e2/image/upload/v1676912203/converse_logo_frvkrh.jpg' alt="brand_image" />
                    <span className="brandName">Converse</span>
                </div>

                <div>
                    <img src='https://res.cloudinary.com/dw0up71e2/image/upload/v1676912220/newbalance_logo1_tmvgtr.jpg' alt="brand_image" />
                    <span className="brandName">New Balance</span>
                </div>

            </div>
        </div>
    );
}

export default Topbrands;