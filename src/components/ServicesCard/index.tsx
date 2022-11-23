import React from 'react';

import { Paths } from '@/constants';

import { ReadMoreLink } from '../ReadMoreLink';
import { ServicesCardContainer } from './styled';
import { ServicesCardProps } from './types';

export const ServicesCard = ({
  id,
  icon,
  title,
  description,
}: ServicesCardProps) => {
  const fullPath = `${Paths.Services}/${id}`;

  return (
    <ServicesCardContainer>
      <img src={icon} />
      <h4>{title}</h4>
      <p>{description}</p>
      <ReadMoreLink path={fullPath} />
    </ServicesCardContainer>
  );
};
