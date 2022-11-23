import { blogCardList } from '@/constants/blogPageData';
import { IPostCard } from '@/types';

export const parsePathName = (pathName: string) => {
  const pathNames = pathName
    .split('/')
    .map((e) => (e === '' ? 'Home' : e))
    .reduce((a: string[], b) => {
      const splittedPath = b
        .split('-')
        .map((e) => e[0].toUpperCase() + e.slice(1))
        .join(' ');
      return [...a, splittedPath];
    }, []);

  return pathNames;
};

export const getAnnualPrice = (price: number) => {
  const discountPercent = 0.7;
  const monthsPerYear = 12;

  return Math.ceil(price * monthsPerYear * discountPercent);
};

export const getRelatedPosts = (post: IPostCard) => {
  const relatedPosts = blogCardList
    .filter(
      (item) =>
        item.id !== post.id && post.tags.some((e) => item.tags.includes(e)),
    )
    .slice(0, 3);

  return relatedPosts;
};
