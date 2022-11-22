import React from 'react';

import { BlogCardsSection } from '@/components/BlogCardsSection';
import { Breadcrumb } from '@/components/Breadcrumb';
import { PageHeadline } from '@/components/PageHeadline';
import { Subscribe } from '@/components/Subscribe';

const data = {
  title: 'Blog',
  descriptor: 'Discover new things with Ensome blog',
  description: `Sed ut perspiciatis unde omnis 
  iste natus error sit voluptatem accusantium 
  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.`,
};

export const Blog = () => {
  return (
    <>
      <Breadcrumb />
      <PageHeadline {...data} />
      <BlogCardsSection />
      <Subscribe />
    </>
  );
};
