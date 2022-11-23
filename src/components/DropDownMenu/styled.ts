import styled from 'styled-components';

import arrowDown from '@/assets/icons/arrow-down.svg';
import arrowRight from '@/assets/icons/arrow-right.svg';
import theme from '@/theme';
import { ToggleProps } from '@/types';

export const DropDownMenuContainer = styled.div<ToggleProps>`
  width: 100%;
  height: 100%;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ isOpen }) =>
    isOpen ? `${theme.colors.black}` : `${theme.colors.grey}`};
  position: relative;
  perspective: 100px;
  z-index: 999999;

  &:hover {
    cursor: pointer;
    color: ${theme.colors.black};
  }

  ul {
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};

    li {
      display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
      opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
    }
  }

  &:not(.disable):hover {
    ul {
      display: block;

      li {
        display: block;
        opacity: 1;
      }
    }
  }

  &::after {
    content: '';
    mask: url(${arrowDown});
    background: ${({ isOpen }) =>
        isOpen ? `${theme.colors.black}` : `${theme.colors.grey}`}
      center;
    margin-left: 3px;
    width: 16px;
    height: 16px;

    transition: transform 0.25s ease;
    transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0)')};

    @media (max-width: 768px) {
      width: 24px;
      height: 24px;
    }
  }

  &:hover::after {
    background: ${theme.colors.black};
  }

  &:not(.disable):hover::after {
    transition: transform 0.25s ease;
    transform: rotate(180deg);
  }

  h6 {
    font-size: 14px;
    line-height: 24px;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    justify-content: space-between;
    width: 100%;
    padding: 15px 0;
    border-bottom: 2px solid ${theme.colors.grey};

    h6 {
      font-weight: 700;
      font-size: 16px;
    }
  }
`;

export const DropDownList = styled.ul`
  width: 100%;
  display: none;
  position: absolute;
  top: 100%;
  left: -90%;
  top: 100%;

  width: 150px;
  perspective: 100px;
  border-radius: 16px;

  @media (max-width: 768px) {
    left: 0;
  }

  li {
    width: 100%;
    display: none;
    color: white;
    background-color: ${theme.colors.secondary};
    /* padding: 10px 20px; */
    font-size: 16px;
    opacity: 0;

    &:hover {
      background-color: ${theme.colors.lightBlue};
    }

    &:nth-child(1) {
      border-radius: 16px 16px 0 0;
    }

    &:nth-last-child(1) {
      border-radius: 0 0 16px 16px;
    }

    & > a {
      padding: 10px 20px;
      width: 100%;
      display: block;
      color: inherit;
      text-decoration: none;
    }
  }

  animation: growDown 300ms ease-in-out forwards;
  transform-origin: top center;

  @keyframes growDown {
    0% {
      transform: scaleY(0);
    }
    80% {
      transform: scaleY(1.1);
    }
    100% {
      transform: scaleY(1);
    }
  }
`;

export const MobileDropDown = styled.div<ToggleProps>`
  display: flex;
  width: 100%;
  flex-flow: column wrap;
  border-bottom: 2px solid ${theme.colors.grey};

  h6 {
    padding: 15px 0;
    font-size: 16px;
    line-height: 24px;
    font-weight: 700;
    color: ${({ isOpen }) =>
      isOpen ? `${theme.colors.black}` : `${theme.colors.grey}`};

    &::after {
      content: '';
      display: block;
      mask: url(${arrowDown}) center;
      background: ${({ isOpen }) =>
        isOpen ? `${theme.colors.black}` : `${theme.colors.grey}`};
      float: right;
      width: 24px;
      height: 24px;

      transition: transform 0.25s ease;
      transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0)')};
    }

    &:hover {
      cursor: pointer;
      color: ${theme.colors.black};
    }

    &:hover::after {
      background: ${theme.colors.black};
    }
  }
`;

export const MobileDropDownList = styled.ul`
  list-style-type: none;
  display: inline-flex;
  flex-flow: column wrap;
  gap: 15px;
  margin-bottom: 15px;
  margin-left: 30px;

  li {
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: ${theme.colors.black};
    display: flex;
    gap: 7px;

    &:hover {
      font-weight: 700;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    &::after {
      content: '';
      mask: url(${arrowRight}) center;
      background: ${theme.colors.black};
      width: 20px;
      height: 24px;
      float: right;
    }

    &:hover::after {
      background: ${theme.colors.primary};
    }
  }
`;
