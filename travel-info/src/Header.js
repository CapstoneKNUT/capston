// components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
// Menubar.js
import profileimages from './회원.jpg';
import settingimages from './설정.jpg';
import './Header.css'; // 메뉴바 전용 CSS 파일 (선택 사항)

function Header() {
  return (
    <div className='menubar'>
      {/* Link 컴포넌트를 사용하여 각 메뉴 항목을 클릭할 때 이동할 경로를 지정합니다. */}
      <div>
        <Link to="/">🏠 Home</Link>
      </div>
      <div className='travel-info'>
        <Link to="/travel-info">여행지 정보</Link>
      </div>
      <div className='travel-info'>
        <Link to="/reviews">리뷰 목록</Link>
      </div>
      <div className='travel-info'>
        <Link to="/mypage">마이 페이지</Link>
      </div>
      <div className='menu-icons'>
        <img src={profileimages} alt='Profile' className='profile' />
        <img src={settingimages} alt='Setting' className='setting' />
      </div>
    </div>
  );
}

export default Header;
