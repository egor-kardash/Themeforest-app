import React from 'react';

import { v4 as getId } from 'uuid';

import { faqBlockDescription, faqBlockTittles } from '@/constants';

import { FaqBlock } from '../FaqBlock';
import { BlocksContainer } from './styled';

export const FaqSection = () => {
  return (
    <BlocksContainer>
      {faqBlockTittles.map((item, i) => (
        <FaqBlock
          key={getId()}
          tittle={item}
          description={faqBlockDescription}
        />
      ))}
    </BlocksContainer>
  );
};
