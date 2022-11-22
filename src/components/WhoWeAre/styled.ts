import styled from 'styled-components';

import theme from '@/theme';

export const WhoWeAreContainer = styled.section`
  max-width: 1141px;
  padding: 0 16px;
  margin: 0 auto;
  margin-bottom: 120px;
  display: flex;
  flex-flow: row nowrap;
  gap: 30px;

  img {
    width: 57%;
    height: auto;
  }
`;

export const TextWrapper = styled.div`
  max-width: 445px;
  margin-top: -13px;
  display: flex;
  flex-flow: column wrap;
  gap: 30px;

  h1 {
    font-weight: 800;
    font-size: 46px;
    line-height: 60px;
    color: ${theme.colors.black};
  }

  p {
    font-family: 'Open Sans';
    font-size: 20px;
    line-height: 33px;
    color: ${theme.colors.grey};
  }
`;
