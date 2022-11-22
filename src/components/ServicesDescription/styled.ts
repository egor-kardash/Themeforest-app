import styled from 'styled-components';

import checkMark from '@/assets/icons/check-mark.svg';
import theme from '@/theme';

export const ServicesDescriptionContainer = styled.section`
  max-width: 1141px;
  width: 100%;
  padding: 0 16px;
  margin: 0 auto calc(50px + 70 * (100vw / 1920));

  display: grid;
  grid-template:
    'content search-bar' 54px
    'content services-bar' auto / 57.5% auto;
  gap: 50px;

  @media (max-width: 1024px) {
    grid-template:
      'search-bar'
      'content'
      'services-bar' / auto;

    justify-content: center;
    gap: 35px;
  }

  @media (max-width: 768px) {
    margin-bottom: calc(50px + (70 + 70 * 0.7) * ((100vw - 360px) / 1920));
  }
`;

export const ContentList = styled.div`
  grid-area: content;
  display: flex;
  flex-flow: column wrap;
  gap: 70px;

  @media (max-width: 1024px) {
    max-width: 700px;
    width: 100%;
  }

  @media (max-width: 768px) {
    gap: 40px;
  }
`;

export const ContentItem = styled.div`
  display: flex;
  flex-flow: column wrap;
  gap: 30px;

  & > img {
    width: 100%;
    border-radius: 6px;
  }

  & > h3 {
    font-weight: 800;
    font-size: calc(22px + 16 * (100vw / 1920));
    line-height: calc(33px + 23 * (100vw / 1920));
    color: ${theme.colors.black};
  }

  & > p {
    white-space: pre-line;
    font-weight: 400;
    font-family: 'Open Sans';
    font-size: calc(14px + 6 * (100vw / 1920));
    line-height: calc(24px + 9 * (100vw / 1920));
    color: ${theme.colors.grey};
  }

  @media (max-width: 768px) {
    gap: 20px;

    & > h3 {
      font-size: calc(22px + (16 + 16 * 0.7) * ((100vw - 360px) / 1920));
      line-height: calc(33px + (23 + 23 * 0.7) * ((100vw - 360px) / 1920));
    }

    & > p {
      font-size: calc(14px + (6 + 6 * 0.7) * ((100vw - 360px) / 1920));
      line-height: calc(24px + (9 + 9 * 0.7) * ((100vw - 360px) / 1920));
    }
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  max-height: 250px;
  overflow: hidden;
  border-radius: 6px;

  img {
    width: 100%;
    border-radius: 6px;
  }
`;

export const SolutionList = styled.ul`
  display: flex;
  flex-flow: column wrap;
  gap: 13px;
  list-style-type: none;

  & > li {
    font-family: 'Open Sans';
    font-weight: 400;
    font-size: calc(14px + 2 * (100vw / 1920));
    line-height: calc(24px + 4 * (100vw / 1920));
    color: ${theme.colors.black};

    &::before {
      content: '';
      display: block;
      float: left;
      background: ${theme.colors.primary};
      mask: url(${checkMark}) no-repeat center;
      width: 25px;
      min-height: 25px;
      height: 100%;
      margin-right: 7px;
    }

    @media (max-width: 768px) {
      font-size: calc(14px + (2 + 2 * 0.7) * ((100vw - 360px) / 1920));
      line-height: calc(24px + (4 + 4 * 0.7) * ((100vw - 360px) / 1920));
    }
  }
`;
