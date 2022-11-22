import { Link } from 'react-router-dom';
import styled from 'styled-components';

import theme from '@/theme';

export const MemberCardContainer = styled(Link)<{ src: string }>`
  width: 100%;
  height: 100%;
  padding: 25px;
  display: flex;
  align-items: flex-end;
  background: linear-gradient(rgba(40, 50, 66, 0) 26.37%, #283850 103.66%),
    url(${(p) => p.src}) no-repeat;
  filter: grayscale(100%);
  background-size: cover;
  border-radius: 6px;
  color: ${theme.colors.white};
  text-decoration: none;

  &:nth-child(3n + 2) {
    margin-top: -120px;
    margin-bottom: 120px;
  }
`;

export const CardDescription = styled.div`
  width: 100%;

  h5 {
    width: 50%;
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    margin: auto 0 0 0;
  }

  p {
    width: 50%;
    font-family: 'Open Sans';
    font-size: 16px;
    line-height: 28px;
  }
`;
