import React, { useEffect, useState } from 'react';

// 찜 목록과 일정 관리
const Itinerary = ({ favorites }) => {
  const [itinerary, setItinerary] = useState([]);
  const [currentDateIndex, setCurrentDateIndex] = useState(0);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const dates = Array.from({ length: 7 }, (_, index) => {
    const date = new Date();
    date.setDate(date.getDate() + index);
    return date.toDateString();
  });

  const handleRegister = () => {
    const newEntry = { date: dates[currentDateIndex], time: selectedTime, location: selectedLocation };
    setItinerary((prev) => [...prev, newEntry].sort((a, b) => new Date(a.time) - new Date(b.time)));
    setIsModalOpen(false); // 모달 닫기
  };

  const nextPage = () => {
    if (currentDateIndex < dates.length - 1) {
      setCurrentDateIndex(currentDateIndex + 1);
    }
  };

  const prevPage = () => {
    if (currentDateIndex > 0) {
      setCurrentDateIndex(currentDateIndex - 1);
    }
  };

  const openModal = (time) => {
    setSelectedTime(time);
    setIsModalOpen(true);
  };

  return (
    <div>
      <h2>{dates[currentDateIndex]}</h2>
      <div className="date-grid">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="date-slot" onClick={() => openModal(`0${index + 9}:00`)}> {/* 예시로 09:00부터 시작 */}
            {`시간: 0${index + 9}:00`}
          </div>
        ))}
      </div>

      {/* 모달 */}
      {isModalOpen && (
        <div className="modal">
          <h3>여행지 선택</h3>
          <select onChange={(e) => setSelectedLocation(e.target.value)} value={selectedLocation}>
            <option value="">여행지 선택</option>
            {favorites.map((favorite) => (
              <option key={favorite.id} value={favorite.location}>
                {favorite.location}
              </option>
            ))}
          </select>
          <button onClick={handleRegister}>등록</button>
          <button onClick={() => setIsModalOpen(false)}>닫기</button>
        </div>
      )}

      <div>
        <button onClick={prevPage} disabled={currentDateIndex === 0}>이전</button>
        <button onClick={nextPage} disabled={currentDateIndex === dates.length - 1}>다음</button>
      </div>
      
      <div>
        {itinerary
          .filter(entry => entry.date === dates[currentDateIndex])
          .map((entry, index) => (
            <div key={index}>
              {entry.date} - {entry.time}: {entry.location}
            </div>
        ))}
      </div>
    </div>
  );
};

export default Itinerary;
