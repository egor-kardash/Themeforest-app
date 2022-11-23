import React from 'react';

import { Breadcrumb } from '@/components/Breadcrumb';
import { CompanyOverview } from '@/components/CompanyOverview';
import { ContactsUs } from '@/components/ContactsUs';
import { HeadlineSinglePage } from '@/components/HeadlineSinglePage';
import { OurMission } from '@/components/OurMission';
import { Subscribe } from '@/components/Subscribe';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { WhoWeAre } from '@/components/WhoWeAre';


export const AboutUs = () => {
  return (
    <>
      <HeadlineSinglePage title='About us' />
      <WhoWeAre />
      <OurMission />
      <CompanyOverview />
      <TestimonialsSection />
      <ContactsUs />
      <Subscribe />
    </>
  );
};
