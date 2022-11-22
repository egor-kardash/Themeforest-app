import React from 'react';

import { v4 as getId } from 'uuid';

import { achievementList } from '@/constants/companyOverviewData';

import { ClientsLogos } from '../ClientsLogos';
import {
  Achievement,
  AchievementsContainer,
  CompanyOverviewContainer,
} from './styled';

export const CompanyOverview = () => {
  return (
    <CompanyOverviewContainer>
      <h2>We provide services that guarantee your success</h2>
      <AchievementsContainer>
        {achievementList.map((item) => (
          <Achievement key={getId()}>
            <span>{item.quantity}</span>
            <p>{item.title}</p>
          </Achievement>
        ))}
      </AchievementsContainer>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium
        doloremque laudantium, totam rem aperiam, eaque ipsa quaeab illo
        inventore. Donec tincidunt tempor quam, non mollis quam finibus nec.
      </p>
      <ClientsLogos />
    </CompanyOverviewContainer>
  );
};
