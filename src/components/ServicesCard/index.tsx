import React from 'react';

import { Paths } from '@/constants';

import { ReadMoreLink, ServicesCardContainer } from './styled';
import { ServicesCardProps } from './types';

export const ServicesCard = ({
  id,
  icon,
  title,
  description,
}: ServicesCardProps) => {
  return (
    <ServicesCardContainer>
      <img src={icon} />
      <h4>{title}</h4>
      <p>{description}</p>
      <ReadMoreLink to={`${Paths.Services}/${id}`}>Read more</ReadMoreLink>
    </ServicesCardContainer>
  );
};
