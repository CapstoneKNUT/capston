import React from 'react';

function MyPage_modal({ itineraries, onClose, onDelete }) {
  return (
    <div className="modal">
      <h2>저장된 여행 일정</h2>
      {itineraries.map((dayItinerary, dayIndex) => (
        <div key={dayIndex}>
          <h3>{dayIndex + 1}일차</h3>
          {dayItinerary ? (
            dayItinerary.map((item, index) => (
              <div key={index}>
                {item.place.p_name} - {item.time}
                <button onClick={() => onDelete(dayIndex, index)}>삭제</button>
              </div>
            ))
          ) : (
            <p>일정이 없습니다.</p>
          )}
        </div>
      ))}
      <button onClick={onClose}>닫기</button>
    </div>
  );
}

export default MyPage_modal;
