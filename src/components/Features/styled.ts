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
    'title description'
    'title button' / 1fr 1fr;

  gap: 30px;

  & > h1 {
    grid-area: title;
    font-weight: 800;
    font-size: calc(30px + 27 * (100vw / 1920));
    line-height: calc(40px + 16 * (100vw / 1920));
    color: ${theme.colors.black};

    & > span {
      color: ${theme.colors.primary};
    }
  }

  & > p {
    grid-area: description;
    margin-top: 10px;
  }

  & > a {
    grid-area: button;
  }

  @media (max-width: 768px) {
    margin-bottom: calc(50px + (70 + 70 * 0.7) * ((100vw - 320px) / 1920));
    grid-template:
      'title'
      'description'
      'button';
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
    'image title' auto
    'image description' auto / 50% 35%;
  gap: 30px;

  background: ${theme.colors.background};

  & > h2 {
    grid-area: title;
    align-self: flex-end;
  }

  @media (max-width: 1024px) {
    padding: calc(50px + 70 * (100vw / 1920)) 0;
    justify-items: center;
    grid-template:
      'title title'
      'image image'
      'description description';
    row-gap: 20px;

    p {
      max-width: 840px;
    }

    a {
      max-width: 540px;
      width: 100%;
    }

    h2 {
      padding: 0 16px;
    }
  }

  @media (max-width: 768px) {
    padding: calc(50px + (70 + 70 * 0.7) * ((100vw - 320px) / 1920)) 0;
  }
`;

export const TextButtonWrapper = styled.div`
  grid-area: description;
  display: flex;
  flex-flow: column wrap;
  gap: 30px;

  @media (max-width: 1024px) {
    padding: 0 16px;
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

export const ImageWrapper = styled.div`
  grid-area: image;
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 80%;

  img {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 6px 6px 0 0;
  }

  @media (max-width: 1024px) {
    padding-top: calc(100% * (100 / 200));
  }
`;
