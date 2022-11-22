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
