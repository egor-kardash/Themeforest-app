import styled from 'styled-components';

import theme from '@/theme';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 80px;
  min-height: 70px;
  background: ${theme.colors.background};
  position: sticky;
  top: 0;
  z-index: 2;
`;

export const Logo = styled.div`
  width: calc(92px + 49 * (100vw / 1920));
  height: 46px;
  background: ${theme.colors.primary};
`;

export const Wrapper = styled.div`
  max-width: 1141px;
  height: 100%;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;

  img {
    display: block;
    margin: auto 0;
    width: calc(92px + 49 * (100vw / 1920));
  }

  @media (max-width: 768px) {
    img {
      width: calc(92px + (49 + 49 * 0.7) * ((100vw - 320px) / 1920));
    }
  }
`;
