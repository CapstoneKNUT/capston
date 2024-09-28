import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);

  // 컴포넌트가 마운트되면 localStorage에서 찜 목록을 가져옴
  useEffect(() => {
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  return (
    <div className="favorites-page">
      <h2>찜한 여행지 목록</h2>
      {favorites.length === 0 ? (
        <p>찜한 여행지가 없습니다.</p>
      ) : (
        <ul className="favorites-list">
          {favorites.map((fav) => (
            <li key={fav.id}>
              <Link to={`/detail/${fav.id}`}>
                <div>{fav.name}</div>
                <div>{fav.category}</div>
                <div>{fav.location} - {fav.district}</div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FavoritesPage;
