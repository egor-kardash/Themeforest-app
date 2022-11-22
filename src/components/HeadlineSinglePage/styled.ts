import styled from 'styled-components';

import theme from '@/theme';

export const HeadlineContainer = styled.section`
  height: 250px;
  padding: 0 16px;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  background: ${theme.colors.background};
  margin-bottom: calc(50px + 70 * (100vw / 1920));

  h1 {
    text-align: center;
    max-width: 730px;
    font-weight: 800;
    font-size: calc(30px + 16 * (100vw / 1920));
    line-height: calc(40px + 20 * (100vw / 1920));
    color: ${theme.colors.black};
  }

  @media (max-width: 768px) {
    margin-bottom: calc(50px + (70 + 70 * 0.7) * ((100vw - 360px) / 1920));

    h1 {
      font-size: calc(30px + (16 + 16 * 0.7) * ((100vw - 360px) / 1920));
      line-height: calc(40px + (20 + 20 * 0.7) * ((100vw - 360px) / 1920));
    }
  }
`;
