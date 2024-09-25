import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menubar from './Menubar';
import SliderComponent from './SliderComponent';
import SearchBar from './SearchBar';
import ActionButtons from './ActionButtons';
import Profile from './Profile';
import Setting from './Setting';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Menubar />
        <SliderComponent />
        <Routes>
          <Route path='/Profile' element={<Profile />} />
          <Route path='/Setting' element={<Setting />} />
        </Routes>
        <SearchBar />
        <ActionButtons />
      </div>
    </Router>
  );
}

export default App;
