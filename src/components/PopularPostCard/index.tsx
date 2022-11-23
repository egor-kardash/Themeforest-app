import { Paths } from '@/constants';
import { BlogPostProps, IPostCard } from '@/types';
import { ReadMoreLink } from '../ReadMoreLink';
import { ImageWrapper, PopularPostCardContainer } from './styled';

export const PopularPostCard = ({ id, date, image, title }: IPostCard) => {
  const fullPath = `${Paths.Blog}/${id}`;

  return (
    <PopularPostCardContainer>
      <ImageWrapper>
        <img src={image} alt='Post image' title='Post image' />
      </ImageWrapper>
      <h6>{date}</h6>
      <h4>{title}</h4>
      <ReadMoreLink path={fullPath} />
    </PopularPostCardContainer>
  );
};
