import React from 'react';

import { Breadcrumb } from '@/components/Breadcrumb';
import { ContactsUs } from '@/components/ContactsUs';
import { FaqSection } from '@/components/FaqSection';
import { PageHeadline } from '@/components/PageHeadline';
import { Subscribe } from '@/components/Subscribe';

const data = {
  title: 'FAQs',
  descriptor: 'Frequently asked question',
  description: `Sed ut perspiciatis unde omnis iste natus error sit voluptate
  accusantium doloremque laudantium totam.`,
};

export const FAQs = () => {
  return (
    <>
      <Breadcrumb />
      <PageHeadline {...data} />
      <FaqSection />
      <ContactsUs />
      <Subscribe />
    </>
  );
};
