import './App.css';
import React from 'react';
import profileimages from './회원.jpg';
import settingimages from './설정.jpg';


function App() {
  return (
    <div className="App">
    <div className='menubar'>
        <div>🏠 Home</div>
        <div className='travel-info'>여행지 정보</div>
        <div className='travel-info'>리뷰 목록</div>
        <div className='travel-info'>마이 페이지</div>
        <div className='menu-icons'>
            <img src={profileimages} alt='Profile' className='profile'></img>
            <img src={settingimages} alt='Setting' className='setting'></img>
        </div>
      </div>
    </div>
  );
}

export default App;
