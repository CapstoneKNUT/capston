// TravelPlanner.js
import React, { useState } from 'react';
import TravelDatePicker from './TravelDatePicker';
import { useNavigate } from 'react-router-dom';

function TravelPlan() {
  const [dates, setDates] = useState(null);
  const navigate = useNavigate(); // react-router-dom의 useNavigate 사용

  // onNext 함수를 정의하여 날짜를 저장하고 페이지를 이동
  const handleNext = (selectedDates) => {
    setDates(selectedDates);

    // 날짜 선택 후 페이지 이동
    navigate('/next-step'); // 다음 페이지로 이동
  };

  return (
    <div className="travel-planner">
      {!dates ? (
        // TravelDatePicker에서 날짜 선택 시 handleNext 호출
        <TravelDatePicker onNext={handleNext} />
      ) : (
        <div>
          <h2>여행 일정이 저장되었습니다</h2>
          <p>여행 시작일: {dates.startDate.toDateString()}</p>
          <p>여행 종료일: {dates.endDate.toDateString()}</p>
        </div>
      )}
    </div>
  );
}

export default TravelPlan;
