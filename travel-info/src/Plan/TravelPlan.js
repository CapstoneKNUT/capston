// TravelPlanner.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TravelDatePicker from './TravelDatePicker';

function TravelPlanner() {
  const [dates, setDates] = useState(null);
  const navigate = useNavigate(); // 페이지 이동을 위한 hook

  const handleNext = (selectedDates) => {
    setDates(selectedDates);
    // 날짜가 선택되면 다른 페이지로 이동
    navigate('/next-step'); // 예: 다음 단계 페이지로 이동
  };

  return (
    <div className="travel-planner">
      {!dates ? (
        // onNext prop을 TravelDatePicker에 전달
        <TravelDatePicker onNext={handleNext} />
      ) : (
        <div>
          <h2>다음 단계로 이동합니다</h2>
          <p>여행 시작: {dates.startDate.toDateString()}</p>
          <p>여행 종료: {dates.endDate.toDateString()}</p>
        </div>
      )}
    </div>
  );
}

export default TravelPlanner;
