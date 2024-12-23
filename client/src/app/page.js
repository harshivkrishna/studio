"use client";
import React, { useState, useEffect } from 'react';
import './globals.css'; // Make sure this file exists
import Navbar from '../../components/Navbar/Navbar'; // Ensure correct path
import Hero from '../../components/Hero/Hero'; // Ensure correct path

const Page = () => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/images/latest');
        const data = await res.json();
        if (data.imagePath) {
          setImage(data.imagePath);
          setTimeout(() => {
            setImage(null);
          }, 4000);
        }
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    fetchImage();
  }, []);

  return (
    <>
      {image && <img src={image} alt="Admin uploaded" />}
      <Navbar />
      <Hero />
    </>
  );
}

export default Page;
