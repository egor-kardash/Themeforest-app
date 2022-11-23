import styled from 'styled-components';

import theme from '@/theme';

export const PopularPostCardContainer = styled.div`
  display: grid;
  width: 100%;

  grid-template:
    'image date'
    'image title'
    'image read-more' / 1fr 1fr;

  gap: calc(6px + 9 * (100vw / 1920)) calc(8px + 12 * (100vw / 1920));

  & > h4 {
    grid-area: title;

    font-weight: 700;
    font-size: calc(14px + 2 * (100vw / 1920));
    line-height: 24px;
    color: ${theme.colors.black};
  }

  & > h6 {
    grid-area: date;

    font-family: 'Open Sans';
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: ${theme.colors.grey};
  }

  @media (max-width: 768px) {
    gap: calc(6px + (9 + 9 * 0.7) * ((100vw - 360px) / 1920))
      calc(8px + (12 + 12 * 0.7) * ((100vw - 360px) / 1920));

    h4 {
      font-size: calc(14px + (2 + 2 * 0.7) * ((100vw - 360px) / 1920));
    }
  }
`;

export const ImageWrapper = styled.div`
  grid-area: image;
  position: relative;
  width: 100%;
  height: 0;
  padding-top: calc(100% * (100 / 160));

  img {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 6px;
  }
`;
