import { Link } from 'react-router-dom';
import { v4 as getId } from 'uuid';

import { Paths } from '@/constants';
import { servicesCardList } from '@/constants/servicesCardData';

import { ServicesBarContainer } from './styled';

export const ServicesBar = () => {
  return (
    <ServicesBarContainer>
      <h2>All services</h2>
      <ul>
        {servicesCardList.map((service) => (
          <li key={getId()}>
            <Link to={`${Paths.Services}/${service.id}`}>{service.title}</Link>
          </li>
        ))}
      </ul>
    </ServicesBarContainer>
  );
};
