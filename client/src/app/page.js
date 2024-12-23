"use client";
import React, { useState, useEffect } from 'react';
import './globals.css'; 
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';

const Page = () => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true); 
  const [closePopup,setClosePopup]= useState(false);
  useEffect(() => {
    const fetchImage = async () => {
      setLoading(true); // Start loading
      try {
        const res = await fetch('http://localhost:5000/api/images/latest');
        const data = await res.json();
        if (data.imagePath) {
          setImage(`http://localhost:5000${data.imagePath}`); // Prepend server URL to image path
        }
      } catch (error) {
        console.error('Error fetching image:', error);
      } finally {
        setLoading(false); // End loading
      }
    };

    fetchImage();
  }, []);

  return (
    <>
      {loading ? <p>Loading image...</p> : image && 
      (
        <div className={`popup-image-container ${closePopup ? 'hide' : ""}`}>
          <div className='popup'>
            <i className='bx bx-x close-icon' onClick={()=>{setClosePopup(true)}}></i>
            <img src={image} alt="Admin uploaded"  />                               
          </div>
        </div>
      )
      }
      <Navbar />
      <Hero />
    </>
  );
}

export default Page;
