import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Profile from './Profile';
import Setting from './Setting';
import profileimages from './회원.jpg';
import settingimages from './설정.jpg';
import slideImage1 from './방콕.jpg'; // 슬라이드 이미지 파일 추가
import slideImage2 from './서울.jpg'; // 슬라이드 이미지 파일 추가
import slideImage3 from './청주.jpg'; // 슬라이드 이미지 파일 추가
import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Router>
      <div className="App">
        <div className="menubar">
          <div>🏠 Home</div>
          <div className="travel-info">여행지 정보</div>
          <div className="travel-info">리뷰 목록</div>
          <div className="travel-info">마이 페이지</div>
          <div className="menu-icons">
            <Link to="/Profile">
              <img src={profileimages} alt='Profile' className="profile" />
            </Link>
            <Link to="/Setting">
              <img src={settingimages} alt='Setting' className="setting" />
            </Link>
          </div>
        </div>
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
        <Routes>
          <Route path='/Profile' element={<Profile />} />
          <Route path='/Setting' element={<Setting />} />
        </Routes>
        <div>
          <input type='text' placeholder='지역명/장소검색' className='search-bar' />
          <button className='search'>검색</button>
        </div>
      </div>
      <div>
        <button className='list-button'>찜목록</button>
        <button className='plan-button'>계획짜기</button>
      </div>
    </Router>
  );
}

export default App;
