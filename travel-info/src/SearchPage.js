// components/SearchPage.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // useHistory 사용

function SearchPage() {
  const [location, setLocation] = useState('');
  const [keyword, setKeyword] = useState('');
  const history = useHistory(); // useNavigate 대신 useHistory 사용

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`/results?location=${location}&keyword=${keyword}`);
  };

  return (
    <div className="search-page">
      <h1>여행지 검색</h1>
      <form onSubmit={handleSearch}>
        <select value={location} onChange={(e) => setLocation(e.target.value)}>
          <option value="">지역 선택</option>
          <option value="seoul">서울</option>
          <option value="busan">부산</option>
          <option value="busan">대전</option>
          <option value="busan">청주</option>
          {/* 더 많은 지역 옵션 추가 */}
        </select>
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="키워드 검색"
        />
        <button type="submit">검색하기</button>
      </form>
    </div>
  );
}

export default SearchPage;
