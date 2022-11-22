import React from 'react';

import { AdvantagesSection } from '@/components/AdvantagesSection';
import { Breadcrumb } from '@/components/Breadcrumb';
import { ContactsUs } from '@/components/ContactsUs';
import { PageHeadline } from '@/components/PageHeadline';
import { SolutionsCard } from '@/components/SolutionsCard';
import { SolutionsCardsSection } from '@/components/SolutionsCardsSection';
import { Subscribe } from '@/components/Subscribe';
import { TestimonialsSection } from '@/components/TestimonialsSection';

const data = {
  title: 'Solutions',
  descriptor: 'Data analytics solutions',
  description: `Getting ready for your success, we provide truly outstanding IT solutions.`,
};

export const Solutions = () => {
  return (
    <>
      <Breadcrumb />
      <PageHeadline {...data} />
      <SolutionsCardsSection />
      <AdvantagesSection />
      <TestimonialsSection />
      <ContactsUs />
      <Subscribe />
    </>
  );
};
