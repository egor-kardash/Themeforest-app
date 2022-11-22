import React from 'react';

import { v4 as getId } from 'uuid';

import { ChoosePlanButton, PricingCardContainer, ServiceList } from './styled';
import { PricingCardProps } from './types';

export const PricingCard = ({ tittle, price, services }: PricingCardProps) => {
  return (
    <PricingCardContainer>
      <h6>{tittle}</h6>
      <p>{price}</p>
      <ChoosePlanButton />
      <ServiceList>
        {services.map((item) => (
          <li key={getId()}>{item}</li>
        ))}
      </ServiceList>
    </PricingCardContainer>
  );
};
