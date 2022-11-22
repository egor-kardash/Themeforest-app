import {
  ArticleContainer,
  blogIconStyles,
  InfoBlock,
  PreviewImageWrapper,
  TextWrapper,
} from './styled';
import { ArticleProps } from './types';

import { ReactComponent as CalendarIcon } from '@/assets/icons/calendar.svg';
import { ReactComponent as PersonIcon } from '@/assets/icons/person.svg';
import { ReactComponent as DataLineIcon } from '@/assets/icons/data-line.svg';
import { ReactComponent as ShareIcon } from '@/assets/icons/share.svg';
import { ReactComponent as TagIcon } from '@/assets/icons/tag.svg';
import { v4 as getId } from 'uuid';

export const Article = ({
  date,
  author,
  image,
  viewsAmount,
  tags,
  text,
}: ArticleProps) => {
  return (
    <ArticleContainer>
      <PreviewImageWrapper>
        <img src={image} alt='Article image' title='Article image' />
        <InfoBlock>
          <div>
            <CalendarIcon style={blogIconStyles} />
            <h6>{date}</h6>
          </div>
          <div>
            <PersonIcon style={blogIconStyles} />
            <h6>{author}</h6>
          </div>
        </InfoBlock>
      </PreviewImageWrapper>
      <TextWrapper>
        {text.map((item) => (
          <p key={getId()}>{item}</p>
        ))}
      </TextWrapper>
      <InfoBlock>
        <div>
          <DataLineIcon style={blogIconStyles} />
          <h6>{viewsAmount} Views</h6>
        </div>
        <div>
          <ShareIcon style={blogIconStyles} />
          <h6>Share:</h6>
        </div>
        <div>
          <TagIcon style={blogIconStyles} />
          <h6>Tags:</h6>
          {tags.map((tag) => <span key={getId()}>{tag}</span>)}
        </div>
      </InfoBlock>
    </ArticleContainer>
  );
};
