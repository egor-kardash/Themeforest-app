import React from 'react';

import AnimateHeight from 'react-animate-height';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import { v4 as getId } from 'uuid';

import { headerDropDownLinks } from '@/constants';
import { useToggle } from '@/hooks/useToggle';

import {
  DropDownList,
  DropDownMenuContainer,
  MobileDropDown,
  MobileDropDownList,
} from './styled';




export const DropDownMenu = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const [isOpen, setIsOpen] = useToggle();

  return !isTabletOrMobile ? (
    <DropDownMenuContainer
      isOpen={isOpen}
      className={isTabletOrMobile ? 'disable' : ''}
      onClick={setIsOpen}
    >
      <h6>Pages</h6>
      <DropDownList>
        {headerDropDownLinks.map((link) => (
          <li key={getId()}>
            <Link to={link.path}>{link.name}</Link>
          </li>
        ))}
      </DropDownList>
    </DropDownMenuContainer>
  ) : (
    <MobileDropDown isOpen={isOpen}>
      <h6 onClick={setIsOpen}>Pages</h6>
      <AnimateHeight duration={250} height={isOpen ? 'auto' : 0}>
        <MobileDropDownList>
          {headerDropDownLinks.map((link) => (
            <li key={getId()}>
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
        </MobileDropDownList>
      </AnimateHeight>
    </MobileDropDown>
  );
};
