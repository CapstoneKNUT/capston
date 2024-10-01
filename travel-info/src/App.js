// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeaderPage from './Header/Header';
import List from './place/Lists';
import Detail from './place/Read';
import Signup from './Member/Sign_up';
import Login from './Member/login';
import Main from './Main/Main';
import Mypage from './MyPage';
import Date from './Plan/TravelDatePicker';
import Travelplan from './Plan/TravelPlan';
import NextStep from './Plan/NextStep';
import Favorite from './place/FavoritesPage';
import DateSelect from './Plan/DateSelect';
import NextPage from './Plan/NextPage';

function App() {
  return (
    <Router>
      <HeaderPage />
      <Routes>
        <Route path="/place/list" element={<List />} />
        <Route path="/place/read/:storeId" element={<Detail />} />
        <Route path="/member/:join" element={<Signup />} />
        <Route path="/member" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/mine" element={<Mypage />} />
        <Route path='/date' element={<Date />} />
        <Route path="/travelplan" element={<Travelplan />} />
        <Route path="/next-step" element={<NextStep />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/dateselect" element={<DateSelect />} />
        <Route path="/nextpage" element={<NextPage />} />
      </Routes>
    </Router>
  );
}

export default App;
