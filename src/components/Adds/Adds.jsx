// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import B1 from '../../image/B1.png';
import B2 from '../../image/B2.png';
import B3 from '../../image/B3.png';
import './Adds.css';

export default function Adds(){
  const data = [
    { id: '1', image: B1 },
    { id: '2', image: B2 },
    { id: '3', image: B3 },
  ];

  return (
    <div className="publish">
      <Swiper
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false
      }}
        navigation 
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.image} alt="Slider" className="slide-item" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}