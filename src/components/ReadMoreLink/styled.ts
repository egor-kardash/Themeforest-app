import styled from "styled-components";

import arrowRight from '@/assets/icons/arrow-right.svg';

import theme from "@/theme";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  text-decoration: none;
  margin: auto 0 0 0;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  color: ${theme.colors.primary};
  display: flex;
  align-items: center;
  gap: 7px;

  &::after {
    content: '';
    display: block;
    background: ${theme.colors.primary};
    mask: url(${arrowRight}) center;
    width: 20px;
    height: 20px;
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