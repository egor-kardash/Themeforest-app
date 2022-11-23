import styled from 'styled-components';

import theme from '@/theme';

export const TeamCardsContainer = styled.section`
  max-width: 1141px;
  padding: 0 16px;
  margin: 0 auto;
  height: auto;
  display: grid;
  /* grid-template-columns: auto auto auto; */
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: 500px;
  gap: 30px;
  margin-top: 240px;
  margin-bottom: calc(50px + 70 * (100vw / 1920));

  @media (max-width: 768px) {
    margin-bottom: calc(50px + (70 + 70 * 0.7) * ((100vw - 360px) / 1920));
  }
`;
