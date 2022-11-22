import { Link } from 'react-router-dom';
import styled from 'styled-components';

import theme from '@/theme';

export const HomeHeadlineContainer = styled.section`
  width: 100%;
  margin-top: calc(20px + 50 * (100vw / 1920));
  margin-bottom: calc(50px + 70 * (100vw / 1920));
  display: flex;
  flex-flow: column wrap;
  gap: calc(46px + 46 * (100vw / 1920));

  @media (max-width: 768px) {
    margin-top: calc(20px + (50 + 50 * 0.7) * ((100vw - 320px) / 1920));
    margin-bottom: calc(50px + (70 + 70 * 0.7) * ((100vw - 320px) / 1920));
  }
`;

export const TextWrapper = styled.div`
  max-width: 1141px;
  width: 100%;
  padding: 0 16px;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;

  h1 {
    max-width: 540px;
    width: 100%;
    font-weight: 800;
    font-size: calc(30px + 16 * (100vw / 1920));
    line-height: calc(40px + 20 * (100vw / 1920));
    color: ${theme.colors.black};

    span {
      color: ${theme.colors.primary};
    }
  }

  p {
    position: relative;
    max-width: 350px;
    font-family: 'Open Sans';
    font-size: calc(14px + 2 * (100vw / 1920));
    line-height: calc(24px + 4 * (100vw / 1920));
    color: ${theme.colors.grey};
  }

  @media (max-width: 768px) {
    gap: 20px;

    h1 {
      letter-spacing: -1.5px;
      font-size: calc(30px + (16 + 16 * 0.7) * ((100vw - 320px) / 1920));
      line-height: calc(40px + (20 + 20 * 0.7) * ((100vw - 320px) / 1920));
    }

    p {
      font-size: calc(14px + (2 + 2 * 0.7) * ((100vw - 320px) / 1920));
      line-height: calc(24px + (4 + 4 * 0.7) * ((100vw - 320px) / 1920));
    }
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  max-height: 650px;
  overflow: hidden;

  img {
    width: 100%;
  }
`;

export const Wrap = styled.div`
  position: relative;
`;

export const LearnMoreLink = styled(Link)`
  position: absolute;
  top: calc(-50px - 20 * (100vw / 1920));
  right: 28.5%;
  width: calc(100px + 40 * (100vw / 1920));
  height: calc(100px + 40 * (100vw / 1920));
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  pointer-events: none;

  text-decoration: none;
  background: ${theme.colors.white};

  button {
    pointer-events: all;
    width: 86%;
    height: 86%;

    border: none;
    border-radius: 50%;
    position: absolute;
    z-index: 1;
    font-weight: 600;
    font-size: calc(12px + 2 * (100vw / 1920));
    line-height: 24px;
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    outline: 1px solid ${theme.colors.white};
    outline-offset: -8px;

    &:hover {
      cursor: pointer;
      background: ${theme.colors.lightBlue};
    }
  }

  @media (max-width: 768px) {
    top: calc(-50px - (20 + 20 * 0.7) * ((100vw - 320px) / 1920));

    width: calc(100px + (40 + 40 * 0.7) * ((100vw - 320px) / 1920));
    height: calc(100px + (40 + 40 * 0.7) * ((100vw - 320px) / 1920));

    button {
      font-size: calc(12px + (2 + 2 * 0.7) * ((100vw - 320px) / 1920));
    }
  }
`;
