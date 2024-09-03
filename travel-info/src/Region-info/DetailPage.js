// components/DetailPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './DetailPage.css';

const storeDetails = {
  1: {
    name: '남토하우스 양주점',
    address: '경기 양주시 청담로 187-30 남토하우스',
    phone: '0507-1337-0806',
    website: 'https://pcmap.place.naver.com/restaurant/1781611988/home',
    hours: '매일 10:00 - 20:00',
    description: '경기도 양주에 위치한 남토하우스 양주점은...',
    image: '/images/store1.jpg',
    categories: ['베이커리', '소형견', '실내', '캐리어'],
  },
  // 다른 가게 정보 추가
};

function DetailPage() {
  const { storeId } = useParams();
  const store = storeDetails[storeId];

  if (!store) {
    return <div>가게 정보를 찾을 수 없습니다.</div>;
  }

  return (
    <div className="detail-page">
      <h1>{store.name}</h1>
      <p>{store.description}</p>
      <img src={store.image} alt={store.name} />
      <div className="store-info">
        <p><strong>주소:</strong> {store.address}</p>
        <p><strong>연락처:</strong> {store.phone}</p>
        <p><strong>홈페이지:</strong> <a href={store.website}>{store.website}</a></p>
        <p><strong>영업시간:</strong> {store.hours}</p>
      </div>
      <div className="store-categories">
        {store.categories.map((category, index) => (
          <button key={index}>{category}</button>
        ))}
      </div>
    </div>
  );
}

export default DetailPage;
