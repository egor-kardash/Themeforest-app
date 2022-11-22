import styled from 'styled-components';

import '@fontsource/open-sans';
import theme from '@/theme';

export const PageHeadlineContainer = styled.section`
  max-width: 1141px;
  width: 100%;
  padding: 0 16px;
  margin: 0 auto;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  gap: 15px;
  margin-bottom: calc(50px + 70 * (100vw / 1920));

  p {
    max-width: 730px;
    text-align: center;
    font-family: 'Open Sans';
    font-size: calc(14px + 6 * (100vw / 1920));
    line-height: calc(24px + 9 * (100vw / 1920));
    color: ${theme.colors.grey};
  }

  h1 {
    text-align: center;
    font-weight: 800;
    font-size: calc(30px + 16 * (100vw / 1920));
    line-height: calc(40px + 20 * (100vw / 1920));
    color: ${theme.colors.black};
  }

  h6 {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: ${theme.colors.primary};
  }

  @media (max-width: 768px) {
    margin-bottom: calc(50px + (70 + 70 * 0.7) * ((100vw - 320px) / 1920));

    h1 {
      font-size: calc(30px + (16 + 16 * 0.7) * ((100vw - 320px) / 1920));
      line-height: calc(40px + (20 + 20 * 0.7) * ((100vw - 320px) / 1920));
    }

    p {
      font-size: calc(14px + (6 + 6 * 0.7) * ((100vw - 320px) / 1920));
      line-height: calc(24px + (9 + 9 * 0.7) * ((100vw - 320px) / 1920));
    }
  }
`;
