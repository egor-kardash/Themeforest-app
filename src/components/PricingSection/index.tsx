import React from 'react';

import { v4 as getId } from 'uuid';

import { pricingList } from '@/constants/pricingCardData';

import { PricingCard } from '../PricingCard';
import { PricingCardList, PricingContainer } from './styled';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

export const PricingSection = () => {
  return (
    <PricingContainer>
      <h2>Our pricing</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        grabCursor={true}
        modules={[Navigation]}
        watchSlidesProgress={true}
        className='shadows-swiper pricing-swiper'
        breakpoints={{
          '560': {
            slidesPerView: 2,
            spaceBetween: 36,
          },
          '901': {
            slidesPerView: 3,
            spaceBetween: 36,
          },
          '1141': {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
      >
        {pricingList.map((item) => (
          <SwiperSlide key={getId()} className='pricing-swiper-slide'>
            <PricingCard {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </PricingContainer>
  );
};
