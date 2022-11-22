import styled from 'styled-components';

import '@fontsource/open-sans';
import theme from '@/theme';

export const HeroImageContainer = styled.section`
  width: 100%;
  height: 450px;
  background: ${theme.colors.secondary};

  display: flex;
  flex-flow: column wrap;
  margin-bottom: 120px;
`;

export const TittleDescriptionWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;

export const Tittle = styled.h1`
  font-weight: 800;
  font-size: 46px;
  line-height: 60px;
  color: ${theme.colors.white};
`;

export const Description = styled.p`
  width: 50%;
  padding-top: 16px;
  font-family: 'Open Sans';
  font-size: 14px;
  line-height: 24px;
  color: ${theme.colors.background};
`;

export const Wrapper = styled.div`
  max-width: 1141px;
  margin: 0 auto;
  padding: 0 16px;
`;
