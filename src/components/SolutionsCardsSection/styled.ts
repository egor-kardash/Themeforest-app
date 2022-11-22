import styled from 'styled-components';

import theme from '@/theme';

export const SolutionsCardsContainer = styled.section`
  width: 100%;
  max-width: 1141px;
  margin: 0 auto;
  padding: 0 16px;
  display: grid;
  grid-template-columns: auto auto;
  gap: 40px 30px;
  margin-bottom: calc(50px + 70 * (100vw / 1920));

  @media (max-width: 768px) {
    grid-template-columns: auto;
    justify-items: center;
    gap: 30px;

    margin-bottom: calc(50px + (70 + 70 * 0.7) * ((100vw - 320px) / 1920));
  }
`;
