import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import './Lists.css';  // CSS 파일을 임포트

function Lists() {
  const [places, setPlaces] = useState([]); // 기존 results -> places로 변경
  const [bookmarks, setBookmarks] = useState(() => {
    const savedBookmarks = localStorage.getItem('bookmarks');
    return savedBookmarks ? JSON.parse(savedBookmarks) : [];
  });

  const [locationInput, setLocationInput] = useState('');
  const [districtInput, setDistrictInput] = useState('');
  const [keywordInput, setKeywordInput] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  // "여행지"와 관련된 단어 리스트
  const relatedTravelWords = ['attraction', 'beach', 'park', 'mountain', 'museum', 'cafe', 'landmark'];

  // 검색 기능
  const handleSearch = (e) => {
    e.preventDefault();

    const searchParams = new URLSearchParams();
    if (locationInput) searchParams.append('location', locationInput);
    if (districtInput) searchParams.append('district', districtInput);
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

    if (!locationParam && !districtParam && !keywordParam) {
      setPlaces(allPlaces);
      return;
    }

    const filteredPlaces = allPlaces.filter((item) => {
      const matchesLocation = locationParam ? item.p_location.includes(locationParam) : true;
      const matchesDistrict = districtParam ? item.p_location.includes(districtParam) : true;
      const matchesKeyword = keywordParam ? item.p_name.includes(keywordParam) : true;

      const isTravelRelated = relatedTravelWords.some((word) =>
        item.p_category.includes(word) || item.p_name.includes(word)
      );

      return matchesDistrict && matchesLocation && matchesKeyword && isTravelRelated;
    });

    setPlaces(filteredPlaces);
  }, [location, relatedTravelWords]);

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
    window.dispatchEvent(new Event('storage')); // storage 이벤트 발생
  };

  return (
    <div className="results-page">
      <h2>검색 결과</h2>
      
      {/* 검색창 */}
      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          value={districtInput}
          onChange={(e) => setDistrictInput(e.target.value)}
          placeholder="위치 검색"
        />
        <input
          type="text"
          value={locationInput}
          onChange={(e) => setLocationInput(e.target.value)}
          placeholder="지역 검색"
        />
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
