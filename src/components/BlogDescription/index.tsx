import { allTags } from '@/constants/blogPageData';
import { Article } from '../ArticleSection';
import { SearchBar } from '../SearchBar';
import { BlogDescriptionContainer, SideBar, TagsBar } from './styled';
import { BlogDescriptionProps } from './types';
import { v4 as getId } from 'uuid';
import { PopularPosts } from '../PopularPosts';
import { useMediaQuery } from 'react-responsive';
import { IPostCard } from '@/types';

export const BlogDescription = (post: IPostCard) => {
  const isLaptopOrTablet = useMediaQuery({ query: '(max-width: 1024px)' })

  return (
    <BlogDescriptionContainer>
      <Article {...post} />
      <SideBar>
        {!isLaptopOrTablet && <SearchBar />}
        <PopularPosts />
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
