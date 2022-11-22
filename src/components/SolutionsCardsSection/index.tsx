import { v4 as getId } from 'uuid';

import { solutionList } from '@/constants/solutionsCardData';

import { SolutionsCard } from '../SolutionsCard';
import { SolutionsCardsContainer } from './styled';

export const SolutionsCardsSection = () => {
  return (
    <SolutionsCardsContainer>
      {solutionList.map((item) => (
        <SolutionsCard key={getId()} {...item} />
      ))}
    </SolutionsCardsContainer>
  );
};
