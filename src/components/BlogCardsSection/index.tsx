import React, { useEffect, useState } from 'react';
import { useRef } from 'react';

import { v4 as getId } from 'uuid';

import { blogCardList } from '@/constants/blogPageData';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import { useToggle } from '@/hooks/useToggle';

import { BlogCard } from '../BlogCard';
import { BlogCardProps } from '../BlogCard/types';
import { BlogCardsContainer, BlogList, SeeMoreButton } from './styled';

export const BlogCardsSection = () => {
  const [articles, setArticles] = useState<
    Omit<BlogCardProps, 'handleClick'>[]
  >([]);
  const [isFetching, setIsFetching] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    uploadMore();
  }, []);

  useEffect(() => {
    if (articles.length === blogCardList.length) {
      setHasMore(false);
    }
  });

  function uploadMore() {
    setIsFetching(true);

    setTimeout(() => {
      const uploadedArticles = blogCardList.slice(
        articles.length,
        articles.length + 4,
      );

      setArticles([...articles, ...uploadedArticles]);
      setIsFetching(false);
    }, 500);
  }

  const handleClick = (event: any) => {
    event.preventDefault();

    const tagName = event.target.innerText;
    setArticles(articles.filter((x) => x.tags.includes(tagName)));
    // event.target.classList.toggle('active');
  };

  return (
    <BlogCardsContainer>
      <BlogList>
        {articles.map((item) => (
          <BlogCard key={getId()} {...item} handleClick={handleClick} />
        ))}
      </BlogList>
      {!isFetching && hasMore && (
        <SeeMoreButton onClick={uploadMore}>See more</SeeMoreButton>
      )}
    </BlogCardsContainer>
  );
};
