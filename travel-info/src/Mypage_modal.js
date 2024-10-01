import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Link import 추가
import './MyPage.css';

function MyPage() {
  const [itinerary, setItinerary] = useState([]);

  useEffect(() => {
    const savedItinerary = localStorage.getItem('itinerary');
    if (savedItinerary) {
      setItinerary(JSON.parse(savedItinerary));
    }
  }, []);

  return (
    <div className="mypage-container">
      <main className="mypage-content">
        <h2>내 일정</h2>
        {itinerary.length === 0 ? (
          <p>등록된 일정이 없습니다.</p>
        ) : (
          <ul>
            {itinerary.map((entry, index) => (
              <li key={index}>
                <Link to={`/itinerary/${index}`}> {/* Link로 상세 페이지로 이동 */}
                  {entry.day}일차: {entry.time}에 {entry.location} 방문
                </Link>
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}

export default MyPage;
