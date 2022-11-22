import { forwardRef } from 'react';

import { v4 as getId } from 'uuid';

import { Paths } from '@/constants';

import {
  BlogCardContainer,
  BlogContent,
  ImageWrapper,
  Tag,
  TagsList,
} from './styled';
import { BlogCardProps } from './types';

export const BlogCard = ({
  id,
  image,
  date,
  title,
  tags,
  handleClick,
}: BlogCardProps) => {
  return (
    <BlogCardContainer to={`${Paths.Blog}/${id}`}>
      <ImageWrapper>
        <img src={image} alt='Blog card image' title={`${title} blog image`} />
      </ImageWrapper>
      <BlogContent>
        <h6>{date}</h6>
        <h4>{title}</h4>
        <TagsList>
          {tags.map((item) => (
            <Tag key={getId()} onClick={handleClick}>
              {item}
            </Tag>
          ))}
        </TagsList>
      </BlogContent>
    </BlogCardContainer>
  );
};
