import { useHistory, useParams } from 'react-router-dom';

import { BlogDescription } from '@/components/BlogDescription';
import { HeadlineSinglePage } from '@/components/HeadlineSinglePage';
import { Subscribe } from '@/components/Subscribe';
import { Paths } from '@/constants';
import { blogCardList } from '@/constants/blogPageData';

export const SingleBlog = () => {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();

  const currentBlog = blogCardList.find((item) => item.id === id);

  if (!currentBlog) {
    history.push(Paths.Home);
    return null;
  }

  return (
    <>
      <HeadlineSinglePage title={currentBlog.title} />
      <BlogDescription {...currentBlog} />
      <Subscribe />
    </>
  );
};
