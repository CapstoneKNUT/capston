import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Read.css';

const storeDetails = {
  1: {
    p_name: '남토하우스 양주점',
    p_location: '경기 양주시 청담로 187-30 남토하우스',
    p_call: '0507-1337-0806',
    p_site: 'https://pcmap.place.naver.com/restaurant/1781611988/home',
    p_opentime: '매일 10:00 - 20:00',
    p_content: '경기도 양주에 위치한 남토하우스 양주점은...',
    p_image: '/images/store1.jpg',
    p_category: ['베이커리', '소형견', '실내', '캐리어'],
    p_park: '가능 (건물 내 지하주차장)',
  },
  // 다른 가게 정보 추가
};

function Read() {
  const { storeId } = useParams();
  const store = storeDetails[storeId];

  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem('bookmarks');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  const isFavorite = favorites.some(fav => fav.p_ord === parseInt(storeId));

  const toggleFavorite = () => {
    let updatedFavorites;

    if (isFavorite) {
      updatedFavorites = favorites.filter(fav => fav.p_ord !== parseInt(storeId));
    } else {
      const newFavorite = {
        p_ord: parseInt(storeId),
        p_name: store.p_name,
        p_location: store.p_location,
        p_call: store.p_call,
        p_site: store.p_site,
        p_opentime: store.p_opentime,
        p_category: store.p_category,
        p_park: store.p_park,
      };
      updatedFavorites = [...favorites, newFavorite];
    }

    setFavorites(updatedFavorites);
    localStorage.setItem('bookmarks', JSON.stringify(updatedFavorites));
    window.dispatchEvent(new Event('storage'));
  };

  useEffect(() => {
    const handleStorageChange = () => {
      const savedFavorites = localStorage.getItem('bookmarks');
      if (savedFavorites) {
        setFavorites(JSON.parse(savedFavorites));
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  if (!store) {
    return <div>가게 정보를 찾을 수 없습니다.</div>;
  }

  return (
    <div className="detail-page">
      <h1>{store.p_name}</h1>
      <p>{store.p_content}</p>
      <img src={store.p_image} alt={store.p_name} />
      <div className="store-info">
        <p><strong>주소:</strong> {store.p_location}</p>
        <p><strong>연락처:</strong> {store.p_call}</p>
        <p><strong>홈페이지:</strong> <a href={store.p_site} target="_blank" rel="noopener noreferrer">{store.p_site}</a></p>
        <p><strong>영업시간:</strong> {store.p_opentime}</p>
        <p><strong>주차 안내:</strong> {store.p_park}</p>
      </div>
      <div className="store-categories">
        {store.p_category.map((category, index) => (
          <button key={index}>{category}</button>
        ))}
      </div>

      <button className="favorite-button" onClick={toggleFavorite} style={{ position: 'relative', background: 'none', border: 'none', cursor: 'pointer' }}>
        {isFavorite ? (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="pink" stroke="black" width="24px" height="24px">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="black" width="24px" height="24px">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        )}
      </button>
    </div>
  );
}

export default Read;
