import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import theme from '@/theme';
import { ToggleProps } from '@/types';

export const NavLinksContainer = styled.ul<ToggleProps>`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 40px;

  @media (max-width: 900px) {
    padding-right: 4vw;
  }

  @media (max-width: 768px) {
    top: 80px;
    right: 0;
    padding: 0 6vw;
    width: 100%;
    height: 90vh;
    flex-flow: column nowrap;
    gap: 0;
    position: fixed;
    align-items: flex-start;
    z-index: 1;
    transform: ${({ isOpen }) =>
      isOpen ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.5s ease;
    background: ${theme.colors.background};

    & > li {
      width: 100%;
      padding: 15px 0;
      border-bottom: 2px solid ${theme.colors.grey};
    }
  }
`;

export const NavItem = styled.li``;

export const StyledNavLink = styled(NavLink)`
  user-select: none;
  text-decoration: none;
  white-space: nowrap;
  border: none;
  font-size: 14px;
  line-height: 24px;
  font-weight: 500;
  color: ${theme.colors.grey};

  &:hover {
    color: ${theme.colors.black};
    cursor: pointer;
  }

  &.active {
    border-bottom: 1px solid ${theme.colors.black};
    color: ${theme.colors.black};
  }

  @media (max-width: 768px) {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;

    &.active {
      border: none;
    }
  }
`;
