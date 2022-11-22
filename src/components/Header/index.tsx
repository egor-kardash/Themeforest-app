import React from 'react';

import { Link, useHistory } from 'react-router-dom';

import headerEnsomeLogo from '@/assets/icons/header-ensome-logo.svg';
import { Paths } from '@/constants';

import { NavBurger } from '../NavBurger';
import { NavMenu } from '../NavMenu';
import { ScrollIndicator } from '../ScrollIndicator';
import { Subscribe } from '../Subscribe';
import { WatchDemoButton } from '../WatchDemoButton';
import { HeaderContainer, Logo, Wrapper } from './styled';

export const Header = () => {
  return (
    <HeaderContainer>
      <Wrapper>
        <Link to={Paths.Home}>
          <img
            src={headerEnsomeLogo}
            alt='Header Ensome logo'
            title='Header Ensome logo'
          />
        </Link>
        <NavBurger />
        <WatchDemoButton />
      </Wrapper>
      <ScrollIndicator />
    </HeaderContainer>
  );
};
