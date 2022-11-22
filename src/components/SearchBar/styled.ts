import styled from 'styled-components';

import searchIcon from '@/assets/icons/search-icon.svg';
import theme from '@/theme';

export const SearchBarContainer = styled.form`
  grid-area: search-bar;
  max-width: 445px;
  width: 100%;
  height: 54px;
  position: relative;
  display: flex;
  flex-flow: row wrap;
  /* align-self: center; */
  border-radius: 6px;
  border: 1px solid ${theme.colors.grey};
  background: ${theme.colors.white};
`;

export const SearchArea = styled.input`
  flex: 1;
  font-family: 'Open Sans';
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  padding: 0 25px;
  border: none;
  border-radius: 6px;
  background: ${theme.colors.white};
  color: ${theme.colors.black};

  /* &:focus {
    outline: none;
  } */

  &::placeholder {
    /* color: ${theme.colors.black}; */
  }
`;

export const SearchButton = styled.button`
  width: 30%;
  height: 54px;
  position: absolute;
  right: -1px;
  top: -1.25px;
  font-weight: 700;
  font-size: 16px;
  background: ${theme.colors.primary};
  color: ${theme.colors.white};
  border: none;
  border-radius: 6px;

  &::after {
    content: 'Search';
  }

  @media (max-width: 480px) {
    &::after {
      content: '';
      display: block;
      background: ${theme.colors.white};
      mask: url(${searchIcon}) center;
      margin: 0 auto;
      width: 24px;
      height: 24px;
    }
  }

  &:hover {
    cursor: pointer;
  }
`;
