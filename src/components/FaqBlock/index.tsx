import React, { useState } from 'react';

import AnimateHeight from 'react-animate-height';

import { useToggle } from '@/hooks/useToggle';

import { BlockContent, TogglerIcon, Wrapper } from './styled';
import { faqBlockProps } from './types';

export const FaqBlock = ({ tittle, description }: faqBlockProps) => {
  const [isOpen, setisOpen] = useToggle();

  return (
    <BlockContent isOpen={isOpen} onClick={setisOpen}>
      <Wrapper isOpen={isOpen}>
        <h4>{tittle}</h4>
        <TogglerIcon isOpen={isOpen}>
          <div></div>
          <div></div>
        </TogglerIcon>
      </Wrapper>
      <AnimateHeight duration={300} height={isOpen ? 'auto' : 0}>
        <p>{description}</p>
      </AnimateHeight>
    </BlockContent>
  );
};
