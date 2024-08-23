import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menubar from './Menubar'; // Menubar 컴포넌트 임포트
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import TravelInfo from './TravelInfo'; 
import Reviews from './Reviews'; 
import MyPage from './MyPage'; 
import Profile from './Profile';
import Setting from './Setting';


function App() {
  return (
    <div className="App">
      <Router>
        <Menubar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/travel-info" element={<TravelInfo />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path='/Profile' element={<Profile />} />
          <Route path='/Setting' element={<Setting />} />
          <Route path='/Profile' element={<Profile />} />
          <Route path='/Setting' element={<Setting />} />
        </Routes>
      </Router>
      <div className='container'>
        <div className='login-form'>
          <label htmlFor="email">Email</label>
          <input type='email' id='email' placeholder='Value' />
          <label htmlFor='password'>Password</label>
          <input type='password' id='password' placeholder='Value' />
          <button type='button'>Log in</button>
          <div className='login-links'>
            <a href='#'>Forgot password?</a>
            <a href='#'>Sign up</a>
          </div>
        </div>
        <div className='login-image'></div>
      </div>
    </div>
  );
}

export default App;