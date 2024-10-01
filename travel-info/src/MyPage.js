import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './MyPage.css';  // 스타일 파일은 따로 관리

function MyPage() {
  const [itinerary, setItinerary] = useState([]); // 일정 상태 추가

  useEffect(() => {
    // localStorage에서 저장된 일정을 가져옴
    const savedItinerary = localStorage.getItem('itinerary');
    if (savedItinerary) {
      setItinerary(JSON.parse(savedItinerary));
    }
  }, []);

  return (
    <div className="mypage-container">
      <header className="mypage-header">
        <div className="profile">
          <div className="profile-pic">
            <img src="default-profile.png" alt="프로필 사진" />
          </div>
          <span className="profile-name">이름 없음</span>
        </div>
        <div className="actions">
          <button className="logout-btn">로그아웃</button>
          <button className="delete-account-btn">회원탈퇴</button>
        </div>
      </header>

      <nav className="mypage-nav">
        <ul>
          <li>내 리뷰</li>
          <Link to="/MyPage_modal">
            <li>내 일정</li>
          </Link>
          <li>내정보 수정</li>
        </ul>
      </nav>

      <main className="mypage-content">
        <h2>여행지 즐겨찾기 </h2>
        <div className="favorites-filter">
          <button>전체</button>
          <button>관광지</button>
          <button>음식점</button>
          <button>숙소</button>
          <button>캠핑장</button>
          <button>쇼핑</button>
          <button>호텔링</button>
        </div>
        <div className="favorites-empty">
          <img src="empty-list.png" alt="빈 목록" />
          <p>즐겨찾기한 목록이 없습니다.</p>
        </div>
      </main>
    </div>
  );
}

export default MyPage;
