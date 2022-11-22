import { Link } from 'react-router-dom';
import styled from 'styled-components';

import arrowRight from '@/assets/icons/arrow-right.svg';
import theme from '@/theme';

export const HeaderBlogCardContainer = styled.div`
  width: 350px;
  display: flex;
  flex-flow: column wrap;
  gap: 20px;

  img {
    width: 100%;
    height: auto;
  }
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

export const ReadMoreLink = styled(Link)`
  text-decoration: none;
  width: 94px;
  margin: auto 0 0 0;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  color: ${theme.colors.primary};

  &::after {
    content: 'a';
    display: block;
    background-color: ${theme.colors.primary};
    mask: url('${arrowRight}') center;
    width: 20px;
    height: 100%;
    float: right;
  }

  &:hover::after {
    background-color: ${theme.colors.black};
  }

  &:hover {
    cursor: pointer;
    color: ${theme.colors.black};
  }
`;
