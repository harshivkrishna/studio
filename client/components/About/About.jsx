import React from 'react';
import './About.css';
const About = () => {
    return (
        <section className="about-section">
            <div className="about-content">
                <div className="images-container">
                    <div className='img-frame'>
                        <img src="/assests/about-1.jpg" className='image' alt="" />
                        <img src="/assests/about-2.jpg" className="image" alt="About 2" />
                    </div>
                </div>
                <div className="text-content">
                    <p className='title'>About Us</p>
                    <h3 className="section-title">We Are Creative And Professional Photographer</h3>
                    <p>
                        Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet.
                    </p>
                    <p>
                        Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet.
                    </p>
                    <ul className="features-list">
                        <li>✔  Quality Products</li>
                        <li>✔  Online Order</li>
                        <li>✔  Custom Products</li>
                        <li>✔  Home Delivery</li>
                    </ul>
                    <button className="read-more-btn">Read More</button>
                </div>
            </div>
        </section>
    );
};

export default About;
