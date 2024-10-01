import React from 'react';
import { useParams } from 'react-router-dom';

const ItineraryDetail = () => {
  const { index } = useParams(); // URL에서 index를 가져옴
  const itinerary = JSON.parse(localStorage.getItem('itinerary')) || [];
  const entry = itinerary[index]; // 선택한 일정 정보 가져오기

  if (!entry) {
    return <p>일정을 찾을 수 없습니다.</p>;
  }

  return (
    <div>
      <h1>{entry.day}일차 일정</h1>
      <p>여행지: {entry.location}</p>
      <p>시간: {entry.time}</p>
      <p>교통수단: {entry.transportation}</p>
      <p>여행 시작일: {entry.startDate}</p>
      <p>여행 종료일: {entry.endDate}</p>
    </div>
  );
};

export default ItineraryDetail;
