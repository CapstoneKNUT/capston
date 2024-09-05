// components/TravelDatePicker.js
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './TravelDatePicker.css';

function TravelDatePicker({ onNext }) {
  const [startDate, setStartDate] = useState(null); // 출발 날짜
  const [endDate, setEndDate] = useState(null); // 도착 날짜

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const handleNextStep = () => {
    if (startDate && endDate) {
      onNext({ startDate, endDate });
    } else {
      alert("여행 날짜를 모두 선택해 주세요.");
    }
  };

  return (
    <div className="travel-datepicker">
      <h2>여행 기간이 어떻게 되시나요?</h2>
      <p>* 여행 일자는 최대 10일까지 설정 가능합니다.</p>
      <DatePicker
        selected={startDate}
        onChange={handleDateChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        inline
        minDate={new Date()}
        maxDate={new Date().setDate(new Date().getDate() + 365)} // 최대 1년 이후까지 선택 가능
        monthsShown={2} // 두 달씩 표시
        dateFormat="yyyy년 MM월 dd일"
      />
      <button onClick={handleNextStep}>선택</button>
    </div>
  );
}

export default TravelDatePicker;
