import React from 'react';

import { Paths } from '@/constants';

import { ReadMoreLink, SolutionsCardContainer } from './styled';
import { SolutionsCardProps } from './types';

export const SolutionsCard = ({
  id,
  icon,
  tittle,
  description,
}: SolutionsCardProps) => {
  return (
    <SolutionsCardContainer>
      <img src={icon} />
      <h4>{tittle}</h4>
      <p>{description}</p>
      <ReadMoreLink to={`${Paths.Solutions}/${id}`}>Read more</ReadMoreLink>
    </SolutionsCardContainer>
  );
};
