import styled from 'styled-components';

import theme from '@/theme';

export const BenefitsContainer = styled.section`
  width: 100%;
  height: 822px;
  padding: 0 16px;

  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  gap: 30px;
  background: ${theme.colors.background};
  margin-bottom: 120px;
`;

export const Wrapper = styled.div`
  max-width: 1141px;
  height: 100%;
  padding: 0 16px;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const BenefitsHeadlineWrapper = styled.div`
  width: 540px;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  gap: 30px;

  h2 {
    grid-area: a;
    font-weight: 800;
    font-size: 38px;
    line-height: 56px;
    color: ${theme.colors.black};
  }

  p {
    grid-area: c;
    font-family: 'Open Sans';
    font-size: 20px;
    line-height: 33px;
    color: ${theme.colors.grey};
  }
`;

export const CardsContainer = styled.div`
  margin-top: -50px;
  grid-area: b;
  width: 540px;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
  gap: 30px;
`;
