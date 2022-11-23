import styled from 'styled-components';

import theme from '@/theme';

export const TestimonialsContainer = styled.section`
  width: 100%;
  max-width: 1141px;
  margin: 0 auto;
  padding: 0 16px;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 63px;
  margin-bottom: calc(50px + 70 * (100vw / 1920));

  @media (max-width: 1140px) {
    max-width: 780px;
  }

  @media (max-width: 768px) {
    margin-bottom: calc(50px + (70 + 70 * 0.7) * ((100vw - 360px) / 1920));
  }

  @media (max-width: 640px) {
    max-width: 420px;
  }
`;

export const TittleControllerWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
`;

export const TestimonialsCardsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
`;
