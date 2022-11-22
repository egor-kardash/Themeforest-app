import styled from 'styled-components';

import theme from '@/theme';

export const ScrollIndicatorContainer = styled.div<{ completion: number }>`
  width: 100%;
  height: 3px;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 111111;
  background: ${theme.colors.primary};
  transform: ${({ completion }) => `translateX(${completion - 100}%)`};
`;
