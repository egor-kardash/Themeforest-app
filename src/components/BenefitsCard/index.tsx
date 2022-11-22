import React from 'react';

import { BenefitsCardContainer } from './styled';
import { BenefitsCardProps } from './types';

export const BenefitsCard = ({
  icon,
  tittle,
  description,
}: BenefitsCardProps) => {
  return (
    <BenefitsCardContainer>
      <img src={icon} />
      <h5>{tittle}</h5>
      <p>{description}</p>
    </BenefitsCardContainer>
  );
};
