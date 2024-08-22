import React from 'react';
import './SearchBar.css'; // 검색 바 전용 CSS 파일

function SearchBar() {
  return (
    <div className="search-container">
      <input type='text' placeholder='지역명/장소검색' className='search-bar' />
      <button className='search'>검색</button>
    </div>
  );
}

export default SearchBar;
