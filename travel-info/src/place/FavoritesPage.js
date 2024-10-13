import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function FavoritesPage() {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const savedBookmarks = localStorage.getItem('bookmarks');
    if (savedBookmarks) {
      setBookmarks(JSON.parse(savedBookmarks));
    }
  }, []);

  const removeBookmark = (p_ord) => {
    const updatedBookmarks = bookmarks.filter(bookmark => bookmark.p_ord !== p_ord);
    setBookmarks(updatedBookmarks);
    localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
  };

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
                  {Array.isArray(bookmark.p_category)
                    ? bookmark.p_category.join(', ')
                    : bookmark.p_category}
                </div>
                <div>{bookmark.p_address}</div>
                <div>별점: ⭐ {bookmark.p_star}</div>
                {bookmark.p_image && <img src={bookmark.p_image} alt={bookmark.p_name} />}
              </Link>
              <button onClick={() => removeBookmark(bookmark.p_ord)}>삭제</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FavoritesPage;