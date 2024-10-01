import React, { useEffect, useState } from "react";

const NextPage = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [daysDiff, setDaysDiff] = useState("");
  const [transportation, setTransportation] = useState("");  // 교통수단 상태
  const [daysArray, setDaysArray] = useState([]);

  useEffect(() => {
    // localStorage에서 저장된 날짜, 여행 일수 및 교통수단 불러오기
    const savedStartDate = localStorage.getItem("startDate");
    const savedEndDate = localStorage.getItem("endDate");
    const savedDaysDiff = localStorage.getItem("daysDiff");
    const savedTransportation = localStorage.getItem("transportation");

    if (savedStartDate && savedEndDate && savedDaysDiff && savedTransportation) {
      setStartDate(savedStartDate);
      setEndDate(savedEndDate);
      setDaysDiff(savedDaysDiff);
      setTransportation(savedTransportation);

      // 여행 기간에 맞춰 일차 배열 생성
      const days = Array.from({ length: parseInt(savedDaysDiff) }, (_, i) => i + 1);
      setDaysArray(days);  // 1일차, 2일차 ... n일차를 배열로 설정
    }
  }, []);

  return (
    <div>
      <h1>선택한 여행 정보</h1>
      <p>
        {startDate && endDate
          ? `여행 시작 날짜: ${startDate}, 여행 마지막 날짜: ${endDate}`
          : "날짜가 선택되지 않았습니다."}
      </p>
      <p>여행 기간: {daysDiff}일</p>
      <p>교통수단: {transportation}</p>

      <div>
        {daysArray.map((day, index) => (
          <div key={index} style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
            <h3>{day}일차</h3>
            {/* 필요한 추가 내용을 여기에 입력할 수 있습니다. */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NextPage;
