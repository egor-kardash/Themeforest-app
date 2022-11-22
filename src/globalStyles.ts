import { createGlobalStyle } from 'styled-components';

import '@fontsource/manrope';
import theme from './theme';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: ${theme.spaces[0]};
    padding: ${theme.spaces[0]};
    box-sizing: border-box;
    font-family: ${theme.font};
    letter-spacing: -0.5px;
  }

  h1 {
    font-family: 'Manrope';
    font-weight: 800;
    font-size: 46px;
    line-height: 60px;
    color: ${theme.colors.black}
  }

  h2 {
    font-family: 'Manrope';
    font-weight: 800;
    font-size: calc(30px + 8 * (100vw / 1920));
    line-height: calc(40px + 16 * (100vw / 1920));
    color: ${theme.colors.black}
  }

  h3 {
    font-family: 'Manrope';
    font-weight: 800;
    font-size: 38px;
    line-height: 56px;
    color: ${theme.colors.black}
  }
  
  html {
    scroll-padding-top: 100px;
  }

  html, body {
    width: 100%;
    user-select: none;
    background: ${theme.colors.white};
  }

  body {  
    & > #root {
      width: 100%;
    }
  }

  body {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .swiper {
    width: 100%;
    height: 100%;  
}

  .shadows-swiper {
    padding: 10px !important;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: calc(30px + (8 + 8 * 0.7) * ((100vw - 360px) / 1920));
      line-height: calc(40px + (16 + 16 * 0.7) * ((100vw - 360px) / 1920));
    }
  }
`;
