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
      <div className='container'>
        <div className='sign-box'>
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' placeholder='Value' /><br></br>
          <label htmlFor='password'>Password</label>
          <input type='password' id='password' placeholder='Value' /><br></br>
          <label htmlFor='recheck'>recheck</label>
          <input type='password' id='password' placeholder='Value' /><br></br>
          
        </div>
      </div>
    </div>
  );
}

export default App;
