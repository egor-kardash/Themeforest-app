import { v4 as getId } from 'uuid';

import { servicesCardList } from '@/constants/servicesCardData';

import { ServicesCard } from '../ServicesCard';
import { ServicesCardsContainer } from './styled';

export const ServicesCardsSection = () => {
  return (
    <ServicesCardsContainer>
      {servicesCardList.map((item) => (
        <ServicesCard key={getId()} {...item} />
      ))}
    </ServicesCardsContainer>
  );
};
