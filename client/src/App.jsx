import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import './index.css';
import './App.css';
import Status from '../components/Status/Status';
import Services from '../components/Services/Services';
import Review from '../components/Review/Review';
import Footer from '../components/Footer/Footer';

const App = () => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [closePopup, setClosePopup] = useState(false);
  /*useEffect(() => {
    const fetchImage = async () => {
      setLoading(true);
      try {
        const res = await fetch('http://localhost:5000/api/images/latest');
        const data = await res.json();
        if (data.imagePath) {
          setImage(`http://localhost:5000${data.imagePath}`);
        }
      } catch (error) {
        console.error('Error fetching image:', error);
      } finally {
        setTimeout(() => {
          setLoading(false); 
        }, 400);
      }
    };

    fetchImage();
  }, []);

  */
  if (loading) {
    return (
      <div className='loader-container'>
        <span className="loader"></span>
      </div>
    );
  }
  return (
    <>
      {image && (
        <div className={`popup-image-container ${closePopup ? 'hide' : ""}`}>
          <div className='popup'>
            <i className='bx bx-x close-icon' onClick={() => { setClosePopup(true); }}></i>
            <img src={image} alt="Discount & Offers" />
          </div>
        </div>
      )}
      <Navbar />
      <Hero />
      <About />
      <Status/>
      <Services/>
      <Review/>
      <Footer/>
    </>
  );
}

export default App;

/*
            <div className='wrapper'>
            <p className='title'>Welcome to Mighty Plethora</p>
            <h1 className='heading'>Transform Your <span>Photos</span>, Transform Your World</h1>
            <p className='para'>Crafting beautiful narratives through photography by capturing the joy, love, and essence of your most meaningful moments</p>
            <div className='button-container'>
            <a href='/' className='explore-more'>Explore More</a>
            <div>
            <a href="/" className="wave-container">
            <span className="wave"></span>
            <i className="bx bxs-right-arrow play-button"></i>
            </a>
            <p>Play Video</p>
            </div>
            </div>
          </div>
*/

/*

*/

/*
"bcryptjs": "^2.4.3",
        "boxicons": "^2.1.4",
        "mongodb": "^6.12.0",
        "react": "^18.3.1",
        "react-dom": "^18.3.1",
        "react-intersection-observer": "^9.14.0",
        "react-router-dom": "^7.1.1",
        "scrollreveal": "^4.0.9",
        "swiper": "^11.1.15",
        "tailwind": "^4.0.0"
*/
