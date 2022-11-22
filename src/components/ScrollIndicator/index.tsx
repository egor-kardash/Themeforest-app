import React from 'react';

import { useScrollCompletion } from '@/hooks/useScrollUpdate';

import { ScrollIndicatorContainer } from './styled';

export const ScrollIndicator = () => {
  const completion = useScrollCompletion();

  return <ScrollIndicatorContainer completion={completion} />;
};
