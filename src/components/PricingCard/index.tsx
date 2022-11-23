import { getAnnualPrice } from '@/helpers';
import { useToggle } from '@/hooks/useToggle';
import React, { useState } from 'react';

import { v4 as getId } from 'uuid';
import { Modal } from '../Modal';
import { Payment } from '../Payment';
import { Video } from '../Video';

import {
  ChoosePlanButton,
  PriceToggler,
  PricingCardContainer,
  ServiceList,
} from './styled';
import { PricingCardProps } from './types';

export const PricingCard = ({ tittle, price, services }: PricingCardProps) => {
  const [isOpen, setIsOpen] = useToggle();
  const [isActive, setIsActive] = useState(false);
  const [planPrice, setPlanPrice] = useState(price);

  const handleClick = (e: any) => {
    const annualPrice = getAnnualPrice(price);

    setIsActive(!isActive);

    if (e.currentTarget.innerText === 'Mo') {
      setPlanPrice(price);
    } else {
      setPlanPrice(annualPrice);
    }
  };

  return (
    <>
      <PricingCardContainer>
        <h6>{tittle}</h6>
        <div>
          <p>{planPrice}</p>
          <PriceToggler isActive={isActive}>
            <button onClick={handleClick}>Mo</button>
            <button onClick={handleClick}>Yr</button>
          </PriceToggler>
        </div>
        <ChoosePlanButton onClick={setIsOpen} />
        <ServiceList>
          {services.map((item) => (
            <li key={getId()}>{item}</li>
          ))}
        </ServiceList>
      </PricingCardContainer>
    </>
  );
};
