import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menubar from './Menubar'; // Menubar 컴포넌트 임포트

function App() {
  return (
    <div className="App">
      <Menubar />
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