import React from 'react';
import Slider from "react-slick";
import slideImage1 from './방콕.jpg';
import slideImage2 from './서울.jpg';
import slideImage3 from './청주.jpg';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './SliderComponent.css'; // 슬라이더 전용 CSS 파일

function SliderComponent() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slide-item">
          <img src={slideImage1} alt="Slide 1" className="slide-image" />
        </div>
        <div className="slide-item">
          <img src={slideImage2} alt="Slide 2" className="slide-image" />
        </div>
        <div className="slide-item">
          <img src={slideImage3} alt="Slide 3" className="slide-image" />
        </div>
      </Slider>
    </div>
  );
}

export default SliderComponent;
