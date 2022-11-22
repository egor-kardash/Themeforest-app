import React from 'react';

import { Benefits } from '@/components/Benefits';
import { CompanyOverview } from '@/components/CompanyOverview';
import { ContactsUs } from '@/components/ContactsUs';
import { Features } from '@/components/Features';
import { BlogSection } from '@/components/HomeBlogSection';
import { HomeHeadline } from '@/components/HomeHeadline';
import { PricingSection } from '@/components/PricingSection';
import { Subscribe } from '@/components/Subscribe';
import { TestimonialsSection } from '@/components/TestimonialsSection';

export const Home = () => {
  return (
    <>
      <HomeHeadline />
      <Features />
      <CompanyOverview />
      {/* <Benefits /> */}
      <TestimonialsSection />
      <PricingSection />
      <BlogSection />
      <ContactsUs />
      <Subscribe />
    </>
  );
};
