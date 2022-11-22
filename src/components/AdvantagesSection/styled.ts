import styled from 'styled-components';

import '@fontsource/open-sans';
import checkMark from '@/assets/icons/check-mark.svg';
import theme from '@/theme';

export const AdvantagesContainer = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  background: ${theme.colors.background};
  margin-bottom: calc(50px + 70 * (100vw / 1920));

  & > img {
    width: 100%;
    height: auto;
    aspect-ratio: 18 / 15;
  }

  @media (max-width: 1024px) {
    grid-template-columns: auto;
    justify-items: center;

    background: none;

    & > img {
      aspect-ratio: 18 / 11;
    }
  }

  @media (max-width: 768px) {
    margin-bottom: calc(50px + (70 + 70 * 0.7) * ((100vw - 360px) / 1920));
    grid-template-columns: auto;
    justify-items: center;

    background: none;

    & > img {
      aspect-ratio: 18 / 11;
    }
  }
`;

export const ChooseUsBlock = styled.div`
  width: 100%;
  max-width: 540px;
  padding-right: 16px;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  gap: 30px;

  h2 {
    margin-bottom: 20px;
  }

  @media (max-width: 1024px) {
    padding: 0 16px;

    h2 {
      margin: 0;
    }
  }
`;

export const Technology = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column wrap;

  h4 {
    font-weight: 700;
    font-size: calc(16px + 4 * (100vw / 1920));
    line-height: calc(24px + 6 * (100vw / 1920));
    color: ${theme.colors.black};

    &::before {
      content: '';
      display: block;
      background: ${theme.colors.primary};
      mask: url('${checkMark}') no-repeat center;
      width: 25px;
      height: 100%;
      float: left;
      margin-right: 7px;
    }
  }

  p {
    font-family: 'Open Sans';
    font-size: calc(14px + 2 * (100vw / 1920));
    line-height: calc(24px + 4 * (100vw / 1920));
    color: ${theme.colors.grey};
  }

  @media (max-width: 768px) {
    h4 {
      font-size: calc(16px + (4 + 4 * 0.7) * ((100vw - 360px) / 1920));
      line-height: calc(24px + (6 + 6 * 0.7) * ((100vw - 360px) / 1920));
    }

    p {
      font-size: calc(14px + (2 + 2 * 0.7) * ((100vw - 360px) / 1920));
      line-height: calc(24px + (4 + 4 * 0.7) * ((100vw - 360px) / 1920));
    }
  }
`;
