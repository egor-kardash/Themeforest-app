import { Link } from 'react-router-dom';
import styled from 'styled-components';

import theme from '@/theme';

export const HeaderBlogCardContainer = styled.div`
  width: 350px;
  display: flex;
  flex-flow: column wrap;
  gap: 20px;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  gap: 12px;

  h4 {
    font-weight: 700;
    font-size: 22px;
    line-height: 33px;
    color: ${theme.colors.black};
  }

  h6 {
    font-family: 'Open Sans';
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: ${theme.colors.grey};
  }

  p {
    font-family: 'Open Sans';
    font-size: 16px;
    line-height: 28px;
    color: ${theme.colors.grey};
  }
`;

export const ImageWrapper = styled.div`
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
