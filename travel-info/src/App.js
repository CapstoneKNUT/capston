// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeaderPage from './Header/Header';
import List from './place/Lists';
import Detail from './place/Read';
import Signup from './User/Sign_up';
import Login from './User/login';
import Main from './Main/Main';
import Mypage from './MyPage';
import Date from './Plan/TravelDatePicker';
import Travelplan from './Plan/TravelPlan';
import NextStep from './Plan/next-step';

function App() {
  return (
    <Router>
      <HeaderPage />
      <Routes>
        <Route path="/list" element={<List />} />
        <Route path="/detail/:storeId" element={<Detail />} />
        <Route path="/Sign_up" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Main" element={<Main />} />
        <Route path="/Mypage" element={<Mypage />} />
        <Route path='/Date' element={<Date />} />
        <Route path="/" element={<Travelplan />} />
        <Route path="/next-step" element={<NextStep />} />
      </Routes>
    </Router>
  );
}

export default App;
