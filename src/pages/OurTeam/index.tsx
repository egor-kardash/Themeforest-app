import React from 'react';

import { AboutTeam } from '@/components/AboutTeam';
import { Breadcrumb } from '@/components/Breadcrumb';
import { PageHeadline } from '@/components/PageHeadline';
import { Subscribe } from '@/components/Subscribe';
import { TeamCards } from '@/components/TeamCards';
import { headlineData } from '@/constants/ourTeamPageData';

import {
  Description,
  HeroImageContainer,
  Tittle,
  TittleDescriptionWrapper,
  Wrapper,
} from './styled';

export const OurTeam = () => {
  return (
    <>
      <Breadcrumb />
      <PageHeadline {...headlineData} />
      <AboutTeam />
      <TeamCards />
      <Subscribe />
    </>
  );
};
