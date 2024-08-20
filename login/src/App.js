import logo from './logo.svg';
import './App.css';
import './layout/header.js';
import profileimages from './회원.jpg';
import settingimages from './설정.jpg';

function App() {
  return (
    <div className="App">
    <div className='container'>
      <div className='login-form'>
        <label for="email">Email</label>
        <input type='email' id='email' placeholder='Value'></input>
        <label for='password'>Password</label>
        <input type='password' id='password' placeholder='Value'></input>
        <button type='button'>log in</button>
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
