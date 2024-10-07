// NextPage.js
import React, { useState, useEffect } from 'react';
import MyPage_modal from './Mypage_modal';

function NextPage() {
  const [travelDays, setTravelDays] = useState(3);
  const [itineraries, setItineraries] = useState([]); // 빈 배열로 초기화
  const [bookmarks, setBookmarks] = useState([]);
  const [selectedTime, setSelectedTime] = useState('');
  const [showModal, setShowModal] = useState(false);

  // localStorage에서 찜 목록을 가져오는 useEffect
  useEffect(() => {
    const savedBookmarks = localStorage.getItem('bookmarks');
    if (savedBookmarks) {
      setBookmarks(JSON.parse(savedBookmarks));
    }
  }, []);

  const handlePlaceSelect = (dayIndex, place) => {
    const isPlaceAlreadySelected = itineraries[dayIndex]?.some(item => item.place.p_ord === place.p_ord);

    if (!isPlaceAlreadySelected) {
      setItineraries((prevItineraries) => {
        const newItineraries = [...prevItineraries];
        if (!newItineraries[dayIndex]) newItineraries[dayIndex] = [];
        newItineraries[dayIndex].push({ place, time: selectedTime });
        return newItineraries;
      });
      setSelectedTime('');
    }
  };

  const getAvailablePlaces = (dayIndex) => {
    const previousItinerary = itineraries.slice(0, dayIndex).flat();
    const usedPlaces = previousItinerary.map(item => item.place.p_name);
    return bookmarks.filter(place => !usedPlaces.includes(place.p_name));
  };

  const handleSaveItinerary = () => {
    setShowModal(true);
  };

  const handleDeleteItinerary = (dayIndex, index) => {
    setItineraries((prevItineraries) => {
      const newItineraries = [...prevItineraries];
      newItineraries[dayIndex].splice(index, 1);
      return newItineraries;
    });
  };

  return (
    <div>
      <h1>여행 일정 짜기</h1>

      <div>
        {Array.from({ length: travelDays }, (_, dayIndex) => (
          <div key={dayIndex}>
            <h2>{dayIndex + 1}일차</h2>
            <MyPage_modal
              availablePlaces={getAvailablePlaces(dayIndex)}
              onSelectPlace={(place) => handlePlaceSelect(dayIndex, place)}
            />
            <div>
              <label>방문할 시간 선택:</label>
              <select value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)}>
                <option value="">시간을 선택하세요</option>
                {Array.from({ length: 48 }, (_, i) => {
                  const hours = String(Math.floor(i / 2)).padStart(2, '0');
                  const minutes = i % 2 === 0 ? '00' : '30';
                  return (
                    <option key={i} value={`${hours}:${minutes}`}>
                      {`${hours}:${minutes}`}
                    </option>
                  );
                })}
              </select>
            </div>
            <div>
              {itineraries[dayIndex] && itineraries[dayIndex].map((item, index) => (
                <div key={index}>
                  {item.place.p_name} - {item.place.p_location} - 시간: {item.time}
                  <button onClick={() => handleDeleteItinerary(dayIndex, index)}>삭제</button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <button onClick={handleSaveItinerary}>저장하기</button>

      {showModal && (
        <MyPage_modal
          itineraries={itineraries} // itineraries가 항상 배열로 전달됨
          onClose={() => setShowModal(false)}
          onDelete={handleDeleteItinerary}
        />
      )}
    </div>
  );
}

export default NextPage;
