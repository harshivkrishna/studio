"use client";
import React, { useEffect, useRef, useState } from 'react';
import './Hero.css';
import 'boxicons/css/boxicons.min.css';

const Hero = () => {
  const [runNextAuto, setRunNextAuto] = useState(null);
  const nextDom = useRef(null);
  const prevDom = useRef(null);
  const carouselDom = useRef(null);
  const sliderDom = useRef(null);
  const thumbnailBorderDom = useRef(null);
  const thumbnailItemsDom = useRef([]);
  const timeDom = useRef(null);
  const timeRunning = 3000;
  const timeAutoNext = 7000;

  const showSlider = (type) => {
    const sliderItemsDom = sliderDom.current.querySelectorAll('.carousel .list .item');
    const thumbnailItems = thumbnailBorderDom.current.querySelectorAll('.carousel .thumbnail .item');

    if (type === 'next') {
      sliderDom.current.appendChild(sliderItemsDom[0]);
      thumbnailBorderDom.current.appendChild(thumbnailItems[0]);
      carouselDom.current.classList.add('next');
    } else {
      sliderDom.current.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
      thumbnailBorderDom.current.prepend(thumbnailItems[thumbnailItems.length - 1]);
      carouselDom.current.classList.add('prev');
    }

    clearTimeout(runNextAuto);
    setRunNextAuto(
      setTimeout(() => {
        nextDom.current.click();
      }, timeAutoNext)
    );

    setTimeout(() => {
      carouselDom.current.classList.remove('next');
      carouselDom.current.classList.remove('prev');
    }, timeRunning);
  };

  useEffect(() => {
    const nextButton = nextDom.current;
    const prevButton = prevDom.current;

    nextButton.onclick = () => {
      showSlider('next');
    };

    prevButton.onclick = () => {
      showSlider('prev');
    };

    const autoNext = setTimeout(() => {
      nextButton.click();
    }, timeAutoNext);

    // Cleanup on component unmount
    return () => {
      clearTimeout(autoNext);
      clearTimeout(runNextAuto);
    };
  }, [runNextAuto]);

  return (
    <div className="carousel" ref={carouselDom}>
      {/* list item */}
      <div className="list" ref={sliderDom}>
        <div className="item">
          <img src="/assests/slider/img1.jpg" alt="Slide 1" />
          <div className="content">
            <div className="author">Welcome to Mighty Plethora</div>
            <div className="title">DESIGN SLIDER</div>
            {/* <div className="topic">ANIMAL</div> */}
            <div className="des">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi,
              rem magnam nesciunt minima placeat, itaque eum neque officiis unde
              
            </div>
            <div className="buttons">
              <button>SEE MORE</button>
              {/* <button>SUBSCRIBE</button> */}
            </div>
          </div>
        </div>
        <div className="item">
          <img src="/assests/slider/img2.jpg" alt="Slide 2" />
          <div className="content">
            <div className="author">Welcome to Mighty Plethora</div>
            <div className="title"></div>
            {/* <div className="topic">ANIMAL</div> */}
            <div className="des">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi,
              rem magnam nesciunt minima placeat, itaque eum neque officiis unde,
              
            </div>
            <div className="buttons">
              <button>SEE MORE</button>
              {/* <button>SUBSCRIBE</button> */}
            </div>
          </div>
        </div>
        <div className="item">
          <img src="/assests/slider/img3.jpg" alt="Slide 3" />
          <div className="content">
            <div className="author">Welcome to Mighty Plethora</div>
            <div className="title">DESIGN SLIDER</div>
            {/* <div className="topic">ANIMAL</div> */}
            <div className="des">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi,
              rem magnam nesciunt minima placeat, itaque eum neque officiis unde,
              
            </div>
            <div className="buttons">
              <button>SEE MORE</button>
              {/* <button>SUBSCRIBE</button> */}
            </div>
          </div>
        </div>
      </div>

      {/* list thumbnail */}
      <div className="thumbnail" ref={thumbnailBorderDom}>
        <div className="item">
          <img src="/assests/slider/img1.jpg" alt="Thumbnail 1" />
          <div className="content">
            <div className="title">Name Slider</div>
            <div className="description">Description</div>
          </div>
        </div>
        <div className="item">
          <img src="/assests/slider/img2.jpg" alt="Thumbnail 2" />
          <div className="content">
            <div className="title">Name Slider</div>
            <div className="description">Description</div>
          </div>
        </div>
        <div className="item">
          <img src="/assests/slider/img3.jpg" alt="Thumbnail 3" />
          <div className="content">
            <div className="title">Name Slider</div>
            <div className="description">Description</div>
          </div>
        </div>
      </div>

      {/* next prev */}
      <div className="arrows">
        <button ref={prevDom} id="prev">&lt;</button>
        <button ref={nextDom} id="next">&gt;</button>
      </div>

      {/* time running */}
      <div className="time" ref={timeDom}></div>
    </div>
  );
};

export default Hero;
