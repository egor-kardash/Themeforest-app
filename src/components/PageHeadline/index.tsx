import React from 'react';

import { PageHeadlineContainer } from './styled';
import { PageHeadlineProps } from './types';

export const PageHeadline = ({
  title,
  descriptor,
  description,
}: PageHeadlineProps) => {
  return (
    <PageHeadlineContainer>
      <h6>{title}</h6>
      <h1>{descriptor}</h1>
      <p>{description}</p>
    </PageHeadlineContainer>
  );
};
