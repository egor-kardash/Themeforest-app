import React from 'react';

import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { v4 as getId } from 'uuid';

import { testimonialsList } from '@/constants/testimonialsCardData';

import { ControlsDirection } from '../ControlsDirection';
import { TestimonialsCard } from '../TestimonialsCard';
import { TestimonialsContainer, TittleControllerWrapper } from './styled';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const TestimonialsSection = () => {
  return (
    <TestimonialsContainer>
      <TittleControllerWrapper>
        <h2>Testimonials</h2>
        <ControlsDirection />
      </TittleControllerWrapper>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        grabCursor={true}
        navigation={{
          nextEl: '.button-next',
          prevEl: '.button-prev',
        }}
        modules={[Navigation]}
        className='shadows-swiper'
        breakpoints={{
          '560': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '1141': {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {testimonialsList.map((item) => (
          <SwiperSlide key={getId()}>
            <TestimonialsCard {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </TestimonialsContainer>
  );
};
