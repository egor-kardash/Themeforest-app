import { Link } from 'react-router-dom';
import styled from 'styled-components';

import theme from '@/theme';

export const FeaturesContainer = styled.section`
  width: 100%;
  height: auto;
  margin-bottom: calc(50px + 70 * (100vw / 1920));

  p {
    font-family: 'Open Sans';
    font-size: calc(14px + 6 * (100vw / 1920));
    line-height: calc(24px + 9 * (100vw / 1920));
    color: ${theme.colors.grey};
  }

  @media (max-width: 768px) {
    margin-bottom: calc(50px + (70 + 70 * 0.7) * ((100vw - 360px) / 1920));

    p {
      font-size: calc(14px + (6 + 6 * 0.7) * ((100vw - 320px) / 1920));
      line-height: calc(24px + (9 + 9 * 0.7) * ((100vw - 320px) / 1920));
    }
  }
`;

export const FirstBlock = styled.div`
  max-width: 1141px;
  padding: 0 16px;
  margin: 0 auto;
  margin-bottom: calc(50px + 70 * (100vw / 1920));
  display: grid;
  grid-template:
    'a b'
    'a c' / 1fr 1fr;

  gap: 30px;

  & > h1 {
    grid-area: a;
    font-weight: 800;
    font-size: calc(30px + 27 * (100vw / 1920));
    line-height: calc(40px + 16 * (100vw / 1920));
    color: ${theme.colors.black};

    & > span {
      color: ${theme.colors.primary};
    }
  }

  & > p {
    grid-area: b;
    margin-top: 10px;
  }

  & > a {
    grid-area: c;
  }

  @media (max-width: 768px) {
    margin-bottom: calc(50px + (70 + 70 * 0.7) * ((100vw - 320px) / 1920));
    grid-template:
      'a'
      'b'
      'c';
    gap: 20px;
    justify-items: center;

    a {
      max-width: 540px;
      width: 100%;
    }

    h1 {
      font-size: calc(30px + (27 + 27 * 0.7) * ((100vw - 320px) / 1920));
      line-height: calc(40px + (16 + 16 * 0.7) * ((100vw - 320px) / 1920));
    }

    p {
      font-size: calc(14px + (6 + 6 * 0.7) * ((100vw - 320px) / 1920));
      line-height: calc(24px + (9 + 9 * 0.7) * ((100vw - 320px) / 1920));
    }
  }
`;

export const SecondBlock = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template:
    'a b' auto
    'a c' auto / 50% 35%;
  gap: 30px;

  background: ${theme.colors.background};

  & > img {
    grid-area: a;
    max-width: 100%;
    height: auto;
  }

  /* & > Link {
    grid-area: c;
  } */

  & > div {
    grid-area: c;
  }

  & > h2 {
    align-self: flex-end;
    grid-area: b;
  }

  @media (max-width: 1024px) {
    padding: calc(50px + 70 * (100vw / 1920)) 0;
    justify-items: center;
    grid-template:
      'b b'
      'a a'
      'c c';
    row-gap: 20px;

    img {
      width: 100%;
      /* height: 200px; */
      aspect-ratio: 2;
    }

    p {
      max-width: 840px;
    }

    a {
      max-width: 540px;
      width: 100%;
    }

    h2,
    div {
      padding: 0 16px;
    }
  }

  @media (max-width: 768px) {
    padding: calc(50px + (70 + 70 * 0.7) * ((100vw - 320px) / 1920)) 0;
  }
`;

export const TextButtonWrapper = styled.div`
  grid-area: c;
  display: flex;
  flex-flow: column wrap;
  gap: 30px;

  @media (max-width: 1024px) {
    gap: 20px;
    align-items: center;
  }
`;

export const SecondBlockHeadline = styled.div`
  max-width: 540px;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  gap: 30px;
`;

export const DiscoverMoreButton = styled(Link)`
  width: 190px;
  height: 54px;
  padding: 15px 38.5px;
  border: none;
  text-decoration: none;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: ${theme.colors.white};
  text-align: center;
  background: ${theme.colors.primary};
  box-shadow: 0px 12px 30px rgba(24, 92, 255, 0.18);
  border-radius: 6px;

  &:hover {
    cursor: pointer;
    background: ${theme.colors.lightBlue};
    box-shadow: 0px 12px 30px rgba(24, 92, 255, 0.18);
  }
`;
