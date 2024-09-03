// components/ResultsPage.js
import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

function ResultsPage() {
  const [results, setResults] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const locationParam = searchParams.get('location') || '';
    const districtParam = searchParams.get('district') || '';
    const keywordParam = searchParams.get('keyword') || '';

    const allResults = [
      { id: 1, name: '서울 남산타워', category: 'attraction', location: '서울', district: '중구' },
      { id: 2, name: '서울 대공원', category: 'attraction', location: '서울', district: '과천시' },
      { id: 3, name: '부산 해운대', category: 'beach', location: '부산', district: '해운대구' },
      { id: 4, name: '서울 타워 카페', category: 'cafe', location: '서울', district: '종로구' },
      { id: 5, name: '강릉 커피숍', category: 'cafe', location: '강원도', district: '강릉시' },
    ];

    const filteredResults = allResults.filter((item) => {
      const matchesLocation = locationParam ? item.location.includes(locationParam) : true;
      const matchesDistrict = districtParam ? item.district.includes(districtParam) : true;
      const matchesKeyword = keywordParam ? item.name.includes(keywordParam) : true;
      return matchesLocation && matchesDistrict && matchesKeyword;
    });

    setResults(filteredResults);
  }, [location]);

  return (
    <div className="results-page">
      <h2>검색 결과</h2>
      <ul>
        {results.map((item) => (
          <li key={item.id}>
            <Link to={`/detail/${item.id}`}>
              <div>{item.name}</div>
              <div>{item.category}</div>
              <div>{item.location} - {item.district}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ResultsPage;
