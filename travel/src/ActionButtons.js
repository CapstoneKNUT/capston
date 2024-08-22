import React from 'react';
import './ActionButtons.css'; // 버튼 전용 CSS 파일

function ActionButtons() {
  return (
    <div className="action-buttons">
      <button className='list-button'>찜목록</button>
      <button className='plan-button'>계획짜기</button>
    </div>
  );
}

export default ActionButtons;
