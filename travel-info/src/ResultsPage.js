// components/ResultsPage.js
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function ResultsPage() {
  const [results, setResults] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const locationParam = searchParams.get('location');
    const keywordParam = searchParams.get('keyword');

    // API 호출 및 결과 설정 로직 - 실제 API 연동 시 아래 코드 대신 API 호출 코드를 작성하세요.
    setResults([
      { id: 1, name: '남도하우스 양주점', category: '카페', location: '양주' },
      { id: 2, name: '고래캠핑식당', category: '식당', location: '인천' },
      { id: 3, name: '서울바당 뚝섬점', category: '식당', location: '서울' },
      { id: 4, name: '봉무다방', category: '카페', location: '대구' },
      { id: 5, name: '해수커피하우스', category: '카페', location: '부산' },
      { id: 6, name: '오빵 용마루공원점', category: '베이커리', location: '영주' },
      // 더 많은 결과를 여기에 추가합니다.
    ]);
  }, [location]);

  return (
    <div className="results-page">
      <h2>검색 결과</h2>
      <ul>
        {results.map((item) => (
          <li key={item.id}>
            <div>{item.name}</div>
            <div>{item.category}</div>
            <div>{item.location}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ResultsPage;
