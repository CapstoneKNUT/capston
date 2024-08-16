import logo from './logo.svg';
import './App.css';
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
