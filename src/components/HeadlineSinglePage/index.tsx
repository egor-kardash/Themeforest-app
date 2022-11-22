import React from 'react';

import { Breadcrumb } from '../Breadcrumb';
import { HeadlineContainer } from './styled';
import { HeadlineSinglePageProps } from './types';

export const HeadlineSinglePage = ({ title }: HeadlineSinglePageProps) => {
  return (
    <HeadlineContainer>
      <h1>{title}</h1>
      <Breadcrumb />
    </HeadlineContainer>
  );
};
