import { useEffect, useState } from 'react';

import { v4 as getId } from 'uuid';

import { blogCardList } from '@/constants/blogPageData';
import { BlogPostProps, IPostCard } from '@/types';

import { PopularPostCard } from '../PopularPostCard';
import { PopularPostsContainer } from './styles';



export const PopularPosts = () => {
  const [posts, setPosts] = useState<IPostCard[]>([]);

  useEffect(() => {
    setPosts(
      blogCardList.sort((a, b) => b.viewsAmount - a.viewsAmount).slice(0, 4),
    );
  }, []);

  return (
    <PopularPostsContainer>
      <h4>Popular posts</h4>
      {posts.map((post) => (
        <PopularPostCard key={getId()} {...post} />
      ))}
    </PopularPostsContainer>
  );
};
