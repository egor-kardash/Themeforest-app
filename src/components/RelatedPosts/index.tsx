import { useEffect, useState } from 'react';

import { v4 as getId } from 'uuid';

import { getRelatedPosts } from '@/helpers';
import { IPostCard } from '@/types';

import { RelatedPostCard } from '../RelatedPostCard';
import { RelatedPostsContainer } from './styled';

export const RelatedPosts = (post: IPostCard) => {
  const [posts, setPosts] = useState<IPostCard[]>([]);

  useEffect(() => {
    const relatedPosts = getRelatedPosts(post);
    setPosts(relatedPosts);
  }, []);

  return (
    <RelatedPostsContainer>
      <h2>Related posts</h2>
      {posts.map((post) => (
        <RelatedPostCard key={getId()} {...post} />
      ))}
    </RelatedPostsContainer>
  );
};
