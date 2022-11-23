import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { HeaderBlogCard } from '../HeaderBlogCard';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { blogCardList } from '@/constants/blogPageData';
import { v4 as getId } from 'uuid';

export const BlogCardSwiper = () => (
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
    {blogCardList.map((item) => (
      <SwiperSlide key={getId()}>
        <HeaderBlogCard {...item} />
      </SwiperSlide>
    ))}
  </Swiper>
);
