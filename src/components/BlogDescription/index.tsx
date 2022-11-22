import { allTags } from '@/constants/blogPageData';
import { Article } from '../ArticleSection';
import { SearchBar } from '../SearchBar';
import { BlogDescriptionContainer, SideBar, TagsBar } from './styled';
import { BlogDescriptionProps } from './types';
import { v4 as getId } from 'uuid';

export const BlogDescription = ({
  image,
  author,
  date,
  viewsAmount,
  tags,
  text,
}: BlogDescriptionProps) => {
  const aritcleProps = { image, author, date, viewsAmount, tags, text };

  return (
    <BlogDescriptionContainer>
      <Article {...aritcleProps} />
      <SideBar>
        <SearchBar />
        <TagsBar>
          <h4>Tags</h4>
          <div>
            {allTags.map((tag) => (
              <span key={getId()}>{tag}</span>
            ))}
          </div>
        </TagsBar>
      </SideBar>
    </BlogDescriptionContainer>
  );
};
