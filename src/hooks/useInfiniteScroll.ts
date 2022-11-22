import { useCallback, useRef } from 'react';

export const useInfiniteScroll = (
  callback: () => void,
  isFetching: boolean,
) => {
  const observer = useRef<IntersectionObserver>();

  const lastElementRef = useCallback(
    (node: any) => {
      if (isFetching) return;

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) callback();
      });

      if (node) observer.current.observe(node);
    },
    [callback, isFetching],
  );

  return [lastElementRef];
};
