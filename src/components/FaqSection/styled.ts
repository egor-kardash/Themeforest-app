import styled from 'styled-components';

import theme from '@/theme';

export const BlocksContainer = styled.section`
  max-width: 1141px;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  flex-flow: column wrap;
  margin-bottom: calc(50px + 70 * (100vw / 1920));
  gap: 20px;

  @media (max-width: 768px) {
    margin-bottom: calc(50px + (70 + 70 * 0.7) * ((100vw - 320px) / 1920));
    gap: 15px;
  }
`;
