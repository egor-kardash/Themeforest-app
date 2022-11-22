import React from 'react';

import { useHistory } from 'react-router-dom';
import { v4 as getId } from 'uuid';

import { headerNavLinks, Paths } from '@/constants';
import { useScrollHide } from '@/hooks/useScrollHide';
import { ToggleProps } from '@/types';

import { DropDownMenu } from '../DropDownMenu';
import { NavItem, NavLinksContainer, StyledNavLink } from './styled';

export const NavMenu = ({ isOpen }: ToggleProps) => {
  const scrollIsHide = useScrollHide(isOpen);

  return (
    <NavLinksContainer isOpen={isOpen}>
      {headerNavLinks.map((link, index) => {
        if (index === 2) {
          return (
            <React.Fragment key={getId()}>
              <DropDownMenu />
              <NavItem>
                <StyledNavLink exact activeClassName='active' to={link.path}>
                  {link.name}
                </StyledNavLink>
              </NavItem>
            </React.Fragment>
          );
        }
        return (
          <NavItem key={getId()}>
            <StyledNavLink exact activeClassName='active' to={link.path}>
              {link.name}
            </StyledNavLink>
          </NavItem>
        );
      })}
    </NavLinksContainer>
  );
};
