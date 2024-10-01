import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import './Lists.css';  // CSS 파일을 임포트
import { area } from './Area';  // 지역 데이터를 임포트

function Lists() {
  const [places, setPlaces] = useState([]);
  const [bookmarks, setBookmarks] = useState(() => {
    const savedBookmarks = localStorage.getItem('bookmarks');
    return savedBookmarks ? JSON.parse(savedBookmarks) : [];
  });

  const [selectedArea, setSelectedArea] = useState(''); // 지역 선택
  const [selectedSubArea, setSelectedSubArea] = useState(''); // 세부 지역 선택
  const [keywordInput, setKeywordInput] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  // 하위 지역 필터링 함수
  const filteredSubArea = selectedArea
    ? area.find((a) => a.name === selectedArea)?.subArea || []
    : [];

  // 검색 기능
  const handleSearch = (e) => {
    e.preventDefault();

    const searchParams = new URLSearchParams();
    if (selectedArea) searchParams.append('location', selectedArea);
    if (selectedSubArea && selectedSubArea !== '지역 전체') searchParams.append('district', selectedSubArea);
    if (keywordInput) searchParams.append('keyword', keywordInput);

    navigate(`?${searchParams.toString()}`);
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const locationParam = searchParams.get('location') || '';
    const districtParam = searchParams.get('district') || '';
    const keywordParam = searchParams.get('keyword') || '';

    const allPlaces = [
      {
        p_ord: 1,
        p_name: '서울 남산타워',
        p_category: 'attraction',
        p_location: '서울 중구',
        p_image: '/images/namsan.jpg',
        p_star: 4.5,
      },
      {
        p_ord: 2,
        p_name: '서울 대공원',
        p_category: 'attraction',
        p_location: '서울 과천시',
        p_image: '/images/seoulpark.jpg',
        p_star: 4.2,
      },
      {
        p_ord: 3,
        p_name: '부산 해운대',
        p_category: 'beach',
        p_location: '부산 해운대구',
        p_image: '/images/haeundae.jpg',
        p_star: 4.7,
      },
      {
        p_ord: 4,
        p_name: '서울 타워 카페',
        p_category: 'cafe',
        p_location: '서울 종로구',
        p_image: '/images/towercafe.jpg',
        p_star: 4.3,
      },
      {
        p_ord: 5,
        p_name: '강릉 커피숍',
        p_category: 'cafe',
        p_location: '강원도 강릉시',
        p_image: '/images/gangneung.jpg',
        p_star: 4.6,
      },
    ];

    const filteredPlaces = allPlaces.filter((item) => {
      const matchesLocation = locationParam ? item.p_location.includes(locationParam) : true;
      const matchesDistrict = districtParam ? item.p_location.includes(districtParam) : true;
      const matchesKeyword = keywordParam ? item.p_name.includes(keywordParam) : true;

      return matchesLocation && matchesDistrict && matchesKeyword;
    });

    // 만약 selectedArea와 selectedSubArea가 없으면 모든 게시물을 표시
    if (!locationParam && !districtParam && !keywordParam) {
      setPlaces(allPlaces);
    } else {
      setPlaces(filteredPlaces);
    }
  }, [location]);

  const toggleBookmark = (p_ord) => {
    const isBookmarked = bookmarks.some(bookmark => bookmark.p_ord === p_ord);
    let updatedBookmarks;

    if (isBookmarked) {
      updatedBookmarks = bookmarks.filter(bookmark => bookmark.p_ord !== p_ord);
    } else {
      const bookmarkItem = places.find(item => item.p_ord === p_ord);
      updatedBookmarks = [...bookmarks, bookmarkItem];
    }

    setBookmarks(updatedBookmarks);
    localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
    window.dispatchEvent(new Event('storage'));
  };

  return (
    <div className="results-page">
      <h2>검색 결과</h2>
      
      {/* 검색창을 select box로 변경 */}
      <form className="search-form" onSubmit={handleSearch}>
        <select value={selectedArea} onChange={(e) => setSelectedArea(e.target.value)}>
          <option value="">지역 선택</option>
          {area.map((a) => (
            <option key={a.name} value={a.name}>
              {a.name}
            </option>
          ))}
        </select>

        <select value={selectedSubArea} onChange={(e) => setSelectedSubArea(e.target.value)} disabled={!selectedArea}>
          <option value="">시/구/군</option>
          <option value="지역 전체">지역 전체</option> {/* 지역 전체 추가 */}
          {filteredSubArea.map((sub, index) => (
            <option key={index} value={sub}>
              {sub}
            </option>
          ))}
        </select>

        <input
          type="text"
          value={keywordInput}
          onChange={(e) => setKeywordInput(e.target.value)}
          placeholder="키워드 검색"
        />
        <button type="submit">검색</button>
      </form>
      
      <ul className="results-list">
        {places.map((place) => (
          <li key={place.p_ord}>
            <Link to={`/place/read/${place.p_ord}`}>
              <div>{place.p_name}</div>
              <div>{place.p_category}</div>
              <div>{place.p_location}</div>
              <img src={place.p_image} alt={place.p_name} style={{ width: '100px' }} />
              <div>⭐ {place.p_star}</div>
            </Link>
            <button onClick={() => toggleBookmark(place.p_ord)}>
              {bookmarks.some(bookmark => bookmark.p_ord === place.p_ord) ? '찜 해제' : '찜'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Lists;
