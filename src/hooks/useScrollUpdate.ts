import { useEffect, useState } from 'react';

export const useScrollCompletion = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const currentPosition = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;

      if (scrollHeight) {
        setValue(Number((currentPosition / scrollHeight).toFixed(2)) * 100);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return value;
};
