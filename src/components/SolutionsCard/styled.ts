import styled from 'styled-components';

import theme from '@/theme';

export const SolutionsCardContainer = styled.div`
  width: 100%;
  max-width: 540px;
  display: flex;
  flex-flow: column wrap;
  padding: 20px 35px;
  gap: 20px;

  background: ${theme.colors.white};
  box-shadow: 0px 4px 12px rgba(12, 68, 204, 0.1);

  h4 {
    font-weight: 700;
    font-size: calc(20px + 2 * (100vw / 1920));
    line-height: calc(30px + 3 * (100vw / 1920));
    color: ${theme.colors.black};
  }

  p {
    font-family: 'Open Sans';
    font-size: calc(14px + 2 * (100vw / 1920));
    line-height: calc(24px + 4 * (100vw / 1920));
    color: ${theme.colors.grey};
  }

  img {
    width: 13%;
    min-width: 40px;
    height: auto;
    /* width: 40px;
    height: 40px; */
  }

  @media (max-width: 768px) {
    h4 {
      font-size: calc(20px + (2 + 2 * 0.7) * ((100vw - 320px) / 1920));
      font-weight: calc(30px + (3 + 3 * 0.7) * ((100vw - 320px) / 1920));
    }

    p {
      font-size: calc(14px + (2 + 2 * 0.7) * ((100vw - 320px) / 1920));
      font-weight: calc(24px + (4 + 4 * 0.7) * ((100vw - 320px) / 1920));
    }
  }

  @media (max-width: 480px) {
    padding: 25px 20px;
  }
`;