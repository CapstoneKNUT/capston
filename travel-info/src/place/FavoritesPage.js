import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function FavoritesPage() {
  const [bookmarks, setBookmarks] = useState([]);

  // 컴포넌트가 마운트되면 localStorage에서 찜 목록을 가져옴
  useEffect(() => {
    const savedBookmarks = localStorage.getItem('bookmarks');
    if (savedBookmarks) {
      setBookmarks(JSON.parse(savedBookmarks));
    }
  }, []);

  return (
    <div className="bookmarks-page">
      <h2>찜한 여행지 목록</h2>
      {bookmarks.length === 0 ? (
        <p>찜한 여행지가 없습니다.</p>
      ) : (
        <ul className="bookmarks-list">
          {bookmarks.map((bookmark) => (
            <li key={bookmark.p_ord}>
              <Link to={`/detail/${bookmark.p_ord}`}>
                <div>{bookmark.p_name}</div>
                <div>
                  {/* p_category가 배열일 때만 join 사용 */}
                  {Array.isArray(bookmark.p_category)
                    ? bookmark.p_category.join(', ')
                    : bookmark.p_category}
                </div>
                <div>{bookmark.p_location}</div>
                <div>별점: ⭐ {bookmark.p_star}</div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FavoritesPage;
