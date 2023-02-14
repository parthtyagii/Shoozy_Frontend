import React from 'react';
import './HomepageFooter.css';
import Logo from '../../shoozy.jpg';





function HomepageFooter() {
    return (
        <div className='homepageFooterContainer'>
            <div className="services">
                <div className='servicesAbout'>
                    <div>
                        <h4>Frequently Asked Questions</h4>
                        <span>Updates on safe Shopping in our Store</span>
                    </div>
                    <div>
                        <img src="https://www.shethepeople.tv/wp-content/uploads/2015/05/working-mom1-e1575875296878.jpg" alt="image" />
                    </div>
                </div>
                <div className='servicesAbout'>
                    <div>
                        <h4>Online Payment Process</h4>
                        <span>Updates on safe Shopping in our Store</span>
                    </div>
                    <div>
                        <img src="https://media.istockphoto.com/id/1305615921/photo/young-man-shopping-online.jpg?s=612x612&w=0&k=20&c=NiQZwOFk88BMU2WzRp5sBArsGaWXsGJ4VzO2gXkA6RY=" alt="image" />
                    </div>
                </div>
                <div className='servicesAbout'>
                    <div>
                        <h4>Home Delivery Options</h4>
                        <span>Updates on safe Shopping in our Store</span>
                    </div>
                    <div>
                        <img src="https://t4.ftcdn.net/jpg/03/13/86/45/360_F_313864527_H5G41GU1oUoceZOh17eqfrwgDs5U5TNC.jpg" alt="image" />
                    </div>
                </div>
            </div>

            <div className="companyAbout">
                <div className='leftSide'>
                    <div>
                        <img src={Logo} alt="image" />
                        <h4>Shoozy</h4>
                    </div>

                    <div>
                        Shoozy is a website that offers a wide range of shoes and sneakers from various brands. 
                        Shoozy provides a convenient online shopping experience, making it easy for customers to find their 
                        perfect pair of shoes.
                    </div>

                    <div>
                        <h5>Accepted Payments</h5>
                        <span className='acceptedPaymentMethods'>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Old_Visa_Logo.svg/2560px-Old_Visa_Logo.svg.png" alt="image" />
                        </span>
                        <span className='acceptedPaymentMethods'>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/2560px-MasterCard_Logo.svg.png" alt="image" />
                        </span>
                        <span className='acceptedPaymentMethods'>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Rupay-Logo.png" alt="image" />
                        </span>
                        <span className='acceptedPaymentMethods'>
                            <img src="https://thumbs.dreamstime.com/b/amazon-logo-editorial-vector-illustration-market-136495269.jpg" />
                        </span>
                        <span className='acceptedPaymentMethods'>
                            <img src="https://pngimg.com/uploads/paypal/paypal_PNG9.png" alt="image" />
                        </span>
                        <span className='acceptedPaymentMethods'>
                            <img src="https://www.logo.wine/a/logo/Google_Pay/Google_Pay-Logo.wine.svg" alt="image" />
                        </span>
                        <span className='acceptedPaymentMethods'>
                            <img src="https://www.apple.com/v/apple-pay/i/images/overview/og_image.png?202104290455" alt="image" />
                        </span>
                    </div>
                </div>


                <div className="rightSide">
                    <div className="companyInfo">
                        <h4>About Us</h4>
                        <ul>
                            <li>About Shoozy</li>
                            <li>Careers</li>
                            <li>News & Blogs</li>
                            <li>Help</li>
                            <li>Press Center</li>
                            <li>Shop by location</li>
                            <li>Shoozy brands</li>
                            <li>Affiliate & Partners</li>
                            <li>Ideas & Guides</li>
                        </ul>
                    </div>

                    <div className="companyInfo">
                        <h4>Services</h4>
                        <ul>
                            <li>Gift Card</li>
                            <li>Mobile App</li>
                            <li>Shipping & Delivery</li>
                            <li>Order Pickup</li>
                            <li>Account Signup</li>
                        </ul>
                    </div>

                    <div className="companyInfo">
                        <h4>Help</h4>
                        <ul>
                            <li>Shoozy Help</li>
                            <li>Returns</li>
                            <li>Track orders</li>
                            <li>Contact us</li>
                            <li>Feedback</li>
                            <li>Security Fraud</li>
                        </ul>
                    </div>

                </div>

            </div>

            <div className="companyCopyright">
                <ul>
                    <li>Terms of Use</li>
                    <li>Privacy Policy</li>
                </ul>

                <span>
                    All Right reserved by Parth | 2023
                </span>
            </div>


        </div>
    );
}

export default HomepageFooter;
