import { Link } from 'react-router-dom';
import styled from 'styled-components';

import theme from '@/theme';

export const BlogCardContainer = styled(Link)`
  width: 100%;
  text-decoration: none;
  display: flex;
  flex-flow: column wrap;
  gap: 20px;

  box-shadow: 0px 4px 12px rgba(12, 68, 204, 0.1);
  border-radius: 6px;

  &,
  &:visited,
  &:hover,
  &:active {
    color: inherit;
  }
`;

export const ImageWrapper = styled.div`
  /* width: 100%;
  max-height: 220px;
  overflow: hidden; */

  position: relative;
  width: 100%;
  height: 0;
  padding-top: calc(100% * (100 / 220));

  img {
    /* width: 100%;
    max-height: 220px;
    object-fit: cover;
    object-position: 25% 25%; */
    /* aspect-ratio: 2.5; */

    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 6px 6px 0 0;
  }
`;

export const BlogContent = styled.div`
  padding: 0 20px 20px;
  display: flex;
  flex-flow: column wrap;

  gap: 12px;

  h6 {
    font-weight: 400;
    font-family: 'Open Sans';
    font-size: 14px;
    line-height: 24px;
    color: ${theme.colors.grey};
  }

  h4 {
    font-weight: 700;
    font-size: calc(16px + 6 * (100vw / 1920));
    line-height: calc(24px + 9 * (100vw / 1920));
  }

  @media (max-width: 768px) {
    h4 {
      font-size: calc(16px + (6 + 6 * 0.7) * ((100vw - 360px) / 1920));
      line-height: calc(24px + (9 + 9 * 0.7) * ((100vw - 360px) / 1920));
    }
  }
`;

export const TagsList = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 15px;
`;

export const Tag = styled.div`
  padding: 3px 11px;
  border: 1px solid ${theme.colors.background};
  border-radius: 6px;

  font-weight: 800;
  font-size: 14px;
  line-height: 24px;

  color: ${theme.colors.primary};

  &:hover {
    cursor: pointer;
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
  }

  &.active {
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
  }
`;
