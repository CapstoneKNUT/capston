import React, { useEffect, useState } from "react";

const NextPage = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [daysDiff, setDaysDiff] = useState("");
  const [transportation, setTransportation] = useState(""); // 교통수단 상태
  const [daysArray, setDaysArray] = useState([]);
  const [itinerary, setItinerary] = useState([]); // 여행 일정 상태 초기화
  const [selectedLocation, setSelectedLocation] = useState(""); // 선택된 장소
  const [selectedTime, setSelectedTime] = useState(""); // 선택된 시간
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 열기 상태
  const [bookmarks, setBookmarks] = useState([]); // 찜 목록 상태
  const [editIndex, setEditIndex] = useState(null); // 수정할 일정의 인덱스
  const [selectedDay, setSelectedDay] = useState(null); // 선택된 일차 상태

  useEffect(() => {
    // itineray 상태 초기화
    setItinerary([]);

    // localStorage에서 저장된 날짜와 교통수단 불러오기
    const savedStartDate = localStorage.getItem("startDate");
    const savedEndDate = localStorage.getItem("endDate");
    const savedDaysDiff = localStorage.getItem("daysDiff");
    const savedTransportation = localStorage.getItem("transportation");

    if (savedStartDate && savedEndDate && savedDaysDiff) {
      setStartDate(savedStartDate);
      setEndDate(savedEndDate);
      setDaysDiff(savedDaysDiff);
      setTransportation(savedTransportation || ""); // 교통수단이 없으면 빈 문자열로 설정

      // 여행 기간에 맞춰 일차 배열 생성
      const days = Array.from({ length: parseInt(savedDaysDiff) }, (_, i) => i + 1);
      setDaysArray(days); // 1일차, 2일차 ... n일차를 배열로 설정
    }

    // localStorage에서 찜 목록을 가져옴
    const savedBookmarks = localStorage.getItem('bookmarks');
    if (savedBookmarks) {
      setBookmarks(JSON.parse(savedBookmarks));
    }
  }, []); // 의존성 배열이 비어 있어 컴포넌트가 처음 렌더링될 때만 실행됨

  const handleRegister = () => {
    const newEntry = { day: selectedDay, time: selectedTime, location: selectedLocation };
    if (editIndex !== null) {
      const updatedItinerary = itinerary.map((entry, index) => (index === editIndex ? newEntry : entry));
      setItinerary(updatedItinerary);
      localStorage.setItem('itinerary', JSON.stringify(updatedItinerary));
      setEditIndex(null); // 수정 후 인덱스 초기화
    } else {
      setItinerary((prev) => [...prev, newEntry]);
      localStorage.setItem('itinerary', JSON.stringify([...itinerary, newEntry]));
    }
    setIsModalOpen(false); // 모달 닫기
  };

  const openModal = (day, entryIndex) => {
    setSelectedDay(day); // 선택된 일차 설정
    if (entryIndex !== undefined) {
      setEditIndex(entryIndex);
      const entry = itinerary[entryIndex];
      setSelectedLocation(entry.location);
      setSelectedTime(entry.time);
    } else {
      setSelectedTime(""); // 시간 초기화
      setSelectedLocation(""); // 장소 초기화
    }
    setIsModalOpen(true); // 모달 열기
  };

  const handleDelete = (index) => {
    const newItinerary = itinerary.filter((_, i) => i !== index);
    setItinerary(newItinerary);
    localStorage.setItem('itinerary', JSON.stringify(newItinerary)); // 수정된 일정을 저장
  };

  const handleSave = () => {
    const currentItinerary = JSON.parse(localStorage.getItem('savedItinerary')) || [];
    const newItinerary = [...currentItinerary, itinerary]; // 기존 일정에 추가
    localStorage.setItem('savedItinerary', JSON.stringify(newItinerary)); // 모든 일정을 저장
    alert("일정이 저장되었습니다!"); // 저장 완료 메시지
  };

  const handleCancel = () => {
    // Cancel 버튼 클릭 시 DateSelect 페이지로 돌아가도록 설정
    // 예를 들어, `useNavigate`를 사용하여 DateSelect 페이지로 이동할 수 있습니다.
  };

  return (
    <div>
      <h1>선택한 여행 정보</h1>
      <p>
        {startDate && endDate
          ? `여행 시작 날짜: ${startDate}, 여행 마지막 날짜: ${endDate}`
          : "날짜가 선택되지 않았습니다."}
      </p>
      <p>여행 기간: {daysDiff}일</p>
      
      <div>
        {daysArray.map((day) => (
          <div key={day} style={{ border: '1px solid black', margin: '10px', padding: '10px' }} onClick={() => openModal(day)}>
            <h3>{day}일차</h3>
            {/* 등록된 일정 표시 */}
            {itinerary
              .filter(entry => entry.day === day)
              .map((entry, index) => (
                <div key={index}>
                  {entry.time}에 {entry.location} 방문
                  <button onClick={() => openModal(day, index)}>수정</button>
                  <button onClick={() => handleDelete(index)}>삭제</button>
                </div>
              ))}
          </div>
        ))}
      </div>

      {/* 모달 */}
      {isModalOpen && (
        <div className="modal">
          <h3>여행지 선택</h3>
          <select onChange={(e) => setSelectedLocation(e.target.value)} value={selectedLocation}>
            <option value="">여행지 선택</option>
            {bookmarks.map((bookmark) => (
              <option key={bookmark.p_ord} value={bookmark.p_name}>
                {bookmark.p_name}
              </option>
            ))}
          </select>
          <input type="time" onChange={(e) => setSelectedTime(e.target.value)} value={selectedTime} />
          <button onClick={handleRegister}>{editIndex !== null ? "수정" : "등록"}</button>
          <button onClick={() => setIsModalOpen(false)}>닫기</button>
        </div>
      )}

      {/* 저장 및 취소 버튼 추가 */}
      <button onClick={handleSave}>저장</button>
      <button onClick={handleCancel}>취소</button>
    </div>
  );
};

export default NextPage;
