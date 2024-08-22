import React from 'react';
import { Link } from 'react-router-dom';
import profileimages from './회원.jpg';
import settingimages from './설정.jpg';
import './Menubar.css'; // 메뉴바 전용 CSS 파일

function Menubar() {
  return (
    <div className='menubar'>
      <div>🏠 Home</div>
      <div className='travel-info'>여행지 정보</div>
      <div className='travel-info'>리뷰 목록</div>
      <div className='travel-info'>마이 페이지</div>
      <div className='menu-icons'>
        <Link to="/Profile">
          <img src={profileimages} alt='Profile' className='profile' />
        </Link>
        <Link to="/Setting">
          <img src={settingimages} alt='Setting' className='setting' />
        </Link>
      </div>
    </div>
  );
}

export default Menubar;
