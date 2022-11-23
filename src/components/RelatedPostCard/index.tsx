import { IPostCard } from '@/types';

import { ImageWrapper, RelatedPostCardContainer } from './styled';
import { RelatedPostCardProps } from './types';

export const RelatedPostCard = (post: IPostCard) => {
  const { image, date, title, previewText } = post;

  return (
    <RelatedPostCardContainer>
      <ImageWrapper>
        <img src={image} alt='Related post image' title='Related post image' />
      </ImageWrapper>
      <h6>{date}</h6>
      <h4>{title}</h4>
      <p>{previewText}</p>
    </RelatedPostCardContainer>
  );
};
