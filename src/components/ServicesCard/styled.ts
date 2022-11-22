import { Link } from 'react-router-dom';
import styled from 'styled-components';

import arrowRight from '@/assets/icons/arrow-right.svg';
import theme from '@/theme';

export const ServicesCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  padding: 20px 35px;
  gap: 20px;

  background: ${theme.colors.white};

  h4 {
    font-weight: 700;
    font-size: calc(20px + 2 * (100vw / 1920));
    line-height: calc(30px + 3 * (100vw / 1920));
    color: ${theme.colors.black};
  }

  p {
    font-family: 'Open Sans';
    font-size: calc(14px + 2 * (100vw / 1920));
    line-height: calc(24px + 4 * (100vw / 1920));
    color: ${theme.colors.grey};
  }

  img {
    width: 80px;
    height: 80px;
  }

  @media (max-width: 768px) {
    max-width: 540px;
    width: 100%;
    padding: 30px 25px;

    h4 {
      font-size: calc(20px + (2 + 2 * 0.7) * ((100vw - 360px) / 1920));
      line-height: calc(30px + (3 + 3 * 0.7) * ((100vw - 360px) / 1920));
    }

    p {
      font-size: calc(14px + (2 + 2 * 0.7) * ((100vw - 360px) / 1920));
      line-height: calc(24px + (4 + 4 * 0.7) * ((100vw - 360px) / 1920));
    }
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
    content: '';
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
