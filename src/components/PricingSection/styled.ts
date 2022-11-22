import styled from 'styled-components';

import theme from '@/theme';

export const PricingContainer = styled.section`
  max-width: 1142px;
  padding: 0 16px;
  margin: 0 auto;
  display: flex;
  flex-flow: column nowrap;
  gap: 50px;
  margin-bottom: calc(50px + 70 * (100vw / 1920));

  @media (max-width: 1140px) {
    max-width: 880px;
  }

  @media (max-width: 900px) {
    max-width: 640px;
  }

  @media (max-width: 768px) {
    margin-bottom: calc(50px + (70 + 70 * 0.7) * ((100vw - 360px) / 1920));
  }
`;

export const PricingCardList = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  gap: 30px;
`;
