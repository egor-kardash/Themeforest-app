import React from 'react';

import { Paths } from '@/constants';

import { ReadMoreLink } from '../ReadMoreLink';
import { SolutionsCardContainer } from './styled';
import { SolutionsCardProps } from './types';

export const SolutionsCard = ({
  id,
  icon,
  tittle,
  description,
}: SolutionsCardProps) => {
  const fullPath = `${Paths.Solutions}/${id}`;

  return (
    <SolutionsCardContainer>
      <img src={icon} />
      <h4>{tittle}</h4>
      <p>{description}</p>
      <ReadMoreLink path={fullPath} />
    </SolutionsCardContainer>
  );
};
