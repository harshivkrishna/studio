import React from 'react';
import './Footer.css';  // Import the CSS file

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <img src="/assests/logo.png" alt=""  className='logo'/>
                    <p className='name'>Mighty Plethora</p>
                    <p className="footer-text">
                        We are a professional photo studio offering a wide range of services for all your photography needs.
                    </p>
                </div>

                <div className="footer-section">
                    <h4 className="footer-title">Services</h4>
                    <ul>
                        <li className="footer-text">Wedding Photography</li>
                        <li className="footer-text">Corporate Photography</li>
                        <li className="footer-text">Portrait Photography</li>
                        <li className="footer-text">Event Photography</li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4 className="footer-title">Quick Links</h4>
                    <ul className='quick-links'>
                        <li className="footer-text"><a href="#">Home</a></li>
                        <li className="footer-text"><a href="#">About</a></li>
                        <li className="footer-text"><a href="#">Contact</a></li>
                        <li className="footer-text"><a href="#">Careers</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4 className="footer-title">Contact Us</h4>
                    <p className="footer-text">123 Photo St, Chennai City, 987625</p>
                    <p className="footer-text">Email: info@photostudio.com</p>
                    <p className="footer-text">Phone: (123) 456-7890</p>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-socials">
                    <a href="#" className="footer-social-icon" aria-label="Facebook">
                        <i className='bx bxl-facebook-square'></i>
                    </a>
                    <a href="#" className="footer-social-icon" aria-label="Twitter">
                        <i className='bx bxl-youtube' ></i>          </a>
                    <a href="#" className="footer-social-icon" aria-label="Instagram">
                        <i className='bx bxl-instagram' ></i>
                    </a>
                </div>

                <p className="footer-copyright">
                    &copy; {new Date().getFullYear()} Mighty Plethora. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
