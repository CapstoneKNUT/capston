import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DateSelect = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [daysDiff, setDaysDiff] = useState(null);  // 여행 기간 상태
  const [transportation, setTransportation] = useState("");  // 교통수단 상태
  const navigate = useNavigate();

  // 날짜가 변경될 때마다 여행 기간을 계산하는 함수
  useEffect(() => {
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const diffTime = Math.abs(end - start);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // 밀리초를 일수로 변환
      setDaysDiff(diffDays + 1); // 여행은 시작일과 종료일 포함이므로 +1
    }
  }, [startDate, endDate]);

  const handleSubmit = () => {
    if (startDate && endDate && transportation) {
      // localStorage에 선택한 날짜 및 교통수단 저장
      localStorage.setItem("startDate", startDate);
      localStorage.setItem("endDate", endDate);
      localStorage.setItem("daysDiff", daysDiff); // 여행 일수도 저장
      localStorage.setItem("transportation", transportation); // 교통수단 저장
      // 다음 페이지로 이동
      navigate("/nextpage");
    } else {
      alert("모든 정보를 입력해주세요.");
    }
  };

  return (
    <div>
      <h1>여행 날짜를 선택하세요</h1>
      <div>
        <label>시작 날짜: </label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </div>
      <div>
        <label>마지막 날짜: </label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>

      {daysDiff !== null && (
        <p>여행 기간: {daysDiff}일</p>  // 선택된 날짜에 따라 여행 일수를 표시
      )}

      <div>
        <label>교통수단: </label>
        <select value={transportation} onChange={(e) => setTransportation(e.target.value)}>
          <option value="">교통수단을 선택하세요</option>
          <option value="자차">자차</option>
          <option value="도보">도보</option>
          <option value="기차">기차</option>
          <option value="버스">버스</option>
          <option value="비행기">비행기</option>
        </select>
      </div>

      <button onClick={handleSubmit}>다음 페이지로</button>
    </div>
  );
};

export default DateSelect;
