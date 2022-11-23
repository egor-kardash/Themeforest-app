import React from 'react';

import { Paths } from '@/constants';

import { ServicesCardContainer } from './styled';
import { ServicesCardProps } from './types';
import { ReadMoreLink } from '../ReadMoreLink';

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
