"use client"
import React, { useEffect } from 'react'
import './Hero.css'
import { Navigation, Pagination, A11y,Autoplay } from 'swiper/modules';
import 'swiper/css/autoplay'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ScrollReveal from 'scrollreveal';
import { Link } from 'react-router-dom';
import 'boxicons/css/boxicons.min.css';
const Hero = () => {
  // useEffect(() => {
  //   // Initialize ScrollReveal
  //   ScrollReveal().reveal('.heading, .para', {
  //     origin:"top",
  //     distance: '50px',
  //     duration: 1000,
  //     delay: 200,
  //     opacity: 0,
  //     interval: 100,
  //   });
  // }, []);
  return (
    <div className='hero'>
    <Swiper
      modules={[Navigation, Pagination, A11y,Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      // autoplay={{ delay: 4000}}
      navigation
      loop={true}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide className='slide'>
          <div className='slide-content'>
          <img src="/assests/slider/img1.jpg" alt="" />
          <div>
            <p>Welcome to Mighty Plethora</p>
            <h1 className='heading'>Transform Your Photos, Transform Your World</h1>
            <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum vitae reiciendis at mollitia minima est aspernatur perferendis praesentium ad autem!</p>
            <div className='button-container'>
            <a href='/' className='explore-more'>Explore More</a>
            <a href='/' className='play-icon'><i className='bx bxs-right-arrow'></i></a>
            <p>Play Video</p>
            </div>

          </div>
          </div>
        </SwiperSlide>
      <SwiperSlide className='slide'>
          <div className='slide-content'>
          <img src="/assests/slider/img2.jpg" alt="" />
          <h1 className='heading'>hello world</h1>
          <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum vitae reiciendis at mollitia minima est aspernatur perferendis praesentium ad autem!</p>
          </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
      <div className='slide-content'>
          <img src="/assests/slider/img3.jpg" alt="" />
          <h1 className='heading'>hello world</h1>
          <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum vitae reiciendis at mollitia minima est aspernatur perferendis praesentium ad autem!</p>
          </div>
        </SwiperSlide>
    </Swiper>
    </div>
  )
}

export default Hero