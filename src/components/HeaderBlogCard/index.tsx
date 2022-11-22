import React from 'react';

import { Paths } from '@/constants';

import { HeaderBlogCardContainer, ReadMoreLink, TextWrapper } from './styled';
import { HeaderBlogCardProps } from './types';

export const HeaderBlogCard = ({
  id,
  image,
  date,
  tittle,
  description,
}: HeaderBlogCardProps) => {
  return (
    <HeaderBlogCardContainer>
      <img src={image} />
      <TextWrapper>
        <h6>{date}</h6>
        <h4>{tittle}</h4>
        <p>{description}</p>
      </TextWrapper>
      <ReadMoreLink to={`${Paths.Blog}/${id}`}>Read more</ReadMoreLink>
    </HeaderBlogCardContainer>
  );
};
