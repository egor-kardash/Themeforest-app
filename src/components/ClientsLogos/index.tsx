import React from 'react';

import { logos } from '@/constants/clientsLogosData';

import { ClientsLogosContainer } from './styled';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { v4 as getId } from 'uuid';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

export const ClientsLogos = () => {
  return (
    <ClientsLogosContainer>
      <Swiper
        slidesPerView={3}
        grabCursor={true}
        modules={[Navigation]}
        className='logos-swiper'
        breakpoints={{
          '361': {
            slidesPerView: 4,
          },
          '481': {
            slidesPerView: 5,
          },
          '769': {
            slidesPerView: 6,
          },
        }}
      >
        {logos.map((item) => (
          <SwiperSlide key={getId()}>
            <img src={item} alt='Company logo' title='Company logo' />
          </SwiperSlide>
        ))}
      </Swiper>
    </ClientsLogosContainer>
  );
};
