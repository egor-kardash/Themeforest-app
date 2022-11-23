import React from 'react';
import { ControlsDirection } from '../ControlsDirection';
import { BlogSectionContainer, LearnMoreButton, TittleControllerWrapper } from './styled';
import { useMediaQuery } from 'react-responsive';
import { BlogCardSwiper } from '../BlogCardSwiper';
import { v4 as getId } from 'uuid';
import { blogCardList } from '@/constants/blogPageData';
import { PopularPostCard } from '../PopularPostCard';
import { Paths } from '@/constants';

export const BlogSection = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <BlogSectionContainer>
      {!isTabletOrMobile ? (
        <>
          <TittleControllerWrapper>
            <h2>Our blog</h2>
            <ControlsDirection />
          </TittleControllerWrapper>
          <BlogCardSwiper />
        </>
      ) : (
        <>
          <h2>Our blog</h2>
          {blogCardList.slice(0, 3).map((post) => (
            <PopularPostCard key={getId()} {...post} />
          ))}
          <LearnMoreButton to={Paths.Blog} />
        </>
      )}
    </BlogSectionContainer>
  );
};
