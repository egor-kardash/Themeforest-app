import styled from 'styled-components';

import theme from '@/theme';

export const WhoWeAreContainer = styled.section`
  max-width: 1141px;
  padding: 0 16px;
  margin: 0 auto calc(50px + 70 * (100vw / 1920));
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
    font-size: calc(30px + 16 * (100vw / 1920));
    line-height: calc(40px + 20 * (100vw / 1920));
    color: ${theme.colors.black};
  }

  p {
    font-family: 'Open Sans';
    font-size: calc(14px + 6 * (100vw / 1920));
    line-height: calc(24px + 9 * (100vw / 1920));
    color: ${theme.colors.grey};
  }

  @media (max-width: 768px) {
    margin-bottom: calc(50px + (70 + 70 * 0.7) * ((100vw - 360px) / 1920));

    h1 {
      font-size: calc(30px + (16 + 16 * 0.7) * ((100vw - 360px) / 1920));
      line-height: calc(40px + (20 + 20 * 0.7) * ((100vw - 360px) / 1920));
    }

    p {
      font-size: calc(14px + (6 + 6 * 0.7) * ((100vw - 360px) / 1920));
      line-height: calc(24px + (9 + 9 * 0.7) * ((100vw - 360px) / 1920));
    }
  }
`;
