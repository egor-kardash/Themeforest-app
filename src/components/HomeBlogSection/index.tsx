import React from 'react';

import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { blogList } from '@/constants/blogCardData';

import { ControlsDirection } from '../ControlsDirection';
import { HeaderBlogCard } from '../HeaderBlogCard';
import { BlogSectionContainer, TittleControllerWrapper } from './styled';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const BlogSection = () => {
  return (
    <BlogSectionContainer>
      <TittleControllerWrapper>
        <h2>Our blog</h2>
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
        breakpoints={{
          '560': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '1140': {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {blogList.map((item, i) => (
          <SwiperSlide key={i}>
            <HeaderBlogCard {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </BlogSectionContainer>
  );
};
