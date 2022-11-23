import styled from 'styled-components';

import theme from '@/theme';

export const RelatedPostCardContainer = styled.div`
  display: grid;
  grid-template:
    'image date'
    'image title'
    'image preview-text' / 0.8fr 1.2fr;
  gap: 10px 20px;

  & > h6 {
    grid-area: date;
    font-family: 'Open Sans';
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: ${theme.colors.grey};
  }

  & > h4 {
    grid-area: title;
    font-weight: 700;
    font-size: calc(14px + 2 * (100vw / 1920));
    line-height: 24px;
  }

  & > p {
    grid-area: preview-text;
    font-family: 'Open Sans';
    font-weight: 400;
    font-size: calc(14px + 2 * (100vw / 1920));
    line-height: calc(24px + 4 * (100vw / 1920));
    color: ${theme.colors.grey};
  }
`;

export const ImageWrapper = styled.div`
  grid-area: image;
  position: relative;
  width: 100%;
  height: 0;
  padding-top: calc(100% * (100 / 130));

  & > img {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 6px;
  }
`;
