import React from 'react';

import { Breadcrumb } from '@/components/Breadcrumb';
import { CompanyOverview } from '@/components/CompanyOverview';
import { ContactsUs } from '@/components/ContactsUs';
import { OurMission } from '@/components/OurMission';
import { Subscribe } from '@/components/Subscribe';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { WhoWeAre } from '@/components/WhoWeAre';

import { HeadlineWrapper } from './styled';

export const AboutUs = () => {
  return (
    <>
      <HeadlineWrapper>
        <h1>About us</h1>
        <Breadcrumb />
      </HeadlineWrapper>
      <WhoWeAre />
      <OurMission />
      <CompanyOverview />
      <TestimonialsSection />
      <ContactsUs />
      <Subscribe />
    </>
  );
};
