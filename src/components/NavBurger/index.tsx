import React from 'react';
import { useEffect } from 'react';

import { useLocation } from 'react-router-dom';

import { useToggle } from '@/hooks/useToggle';

import { NavMenu } from '../NavMenu';
import { BurgerIcon } from './styled';

export const NavBurger = () => {
  const [isOpen, setIsOpen] = useToggle();
  const location = useLocation();

  useEffect(() => {
    isOpen && setIsOpen();
  }, [location.pathname]);

  return (
    <>
      <BurgerIcon isOpen={isOpen} onClick={setIsOpen}>
        <div></div>
        <div></div>
        <div></div>
      </BurgerIcon>
      <NavMenu isOpen={isOpen} />
    </>
  );
};
