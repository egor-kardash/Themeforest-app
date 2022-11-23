import React from 'react';

import { Paths } from '@/constants';

import { ReadMoreLink } from '../ReadMoreLink';
import { HeaderBlogCardContainer, ImageWrapper, TextWrapper } from './styled';
import { HeaderBlogCardProps } from './types';

export const HeaderBlogCard = ({
  id,
  image,
  date,
  title,
  previewText,
}: HeaderBlogCardProps) => {
  const fullPath = `${Paths.Blog}/${id}`;

  return (
    <HeaderBlogCardContainer>
      <ImageWrapper>
        <img src={image} alt='Blog image' title='Blog image' />
      </ImageWrapper>
      <TextWrapper>
        <h6>{date}</h6>
        <h4>{title}</h4>
        <p>{previewText}</p>
      </TextWrapper>
      <ReadMoreLink path={fullPath} />
    </HeaderBlogCardContainer>
  );
};
