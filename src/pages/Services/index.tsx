import React from 'react';

import { Breadcrumb } from '@/components/Breadcrumb';
import { ClientsLogos } from '@/components/ClientsLogos';
import { CompanyOverview } from '@/components/CompanyOverview';
import { ContactsUs } from '@/components/ContactsUs';
import { PageHeadline } from '@/components/PageHeadline';
import { ServicesCard } from '@/components/ServicesCard';
import { ServicesCardsSection } from '@/components/ServicesCardsSection';
import { Subscribe } from '@/components/Subscribe';

const data = {
  title: 'Services',
  descriptor: 'Data Analytics Services',
  description: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quaeab illo inventore.`,
};

export const Services = () => {
  return (
    <div>
      <Breadcrumb />
      <PageHeadline {...data} />
      <ServicesCardsSection />
      <CompanyOverview />
      <ContactsUs />
      <Subscribe />
    </div>
  );
};
