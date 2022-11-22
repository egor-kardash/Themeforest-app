import React from 'react';

import { Link } from 'react-router-dom';

import footerEnsomeLogo from '@/assets/icons/footer-ensome-logo.svg';
import { Paths } from '@/constants';

import {
  BehanceIcon,
  CopyrightContainer,
  Description,
  DribbbleIcon,
  FacebookIcon,
  FooterContainer,
  LinkedInIcon,
  LinksContainer,
  LinksList,
  ListItem,
  PrivacyTermsContainer,
  RightContainer,
  SeparatorLine,
  SocialIcons,
  StyledLink,
  StyledText,
  Tittle,
  TopContainer,
  TwitterIcon,
  Wrapper,
  YoutubeIcon,
} from './styled';

export const Footer = () => {
  return (
    <FooterContainer>
      <Wrapper>
        <TopContainer>
          <RightContainer>
            <Link to={Paths.Home}>
              <img
                src={footerEnsomeLogo}
                alt='Footer Ensome logo'
                title='Footer Ensome logo'
              />
            </Link>
            <Description>
              Ut enim ad minima veniam, quis nostrum exercitationem ullam
              corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.
            </Description>
            <SocialIcons>
              <FacebookIcon />
              <TwitterIcon />
              <LinkedInIcon />
              <YoutubeIcon />
              <DribbbleIcon />
              <BehanceIcon />
            </SocialIcons>
          </RightContainer>
          <LinksContainer>
            <LinksList>
              <Tittle>Quick link</Tittle>
              <ListItem>
                <StyledLink to={Paths.Home}>Home</StyledLink>
              </ListItem>
              <ListItem>
                <StyledLink to={Paths.Solutions}>Solutions</StyledLink>
              </ListItem>
              <ListItem>
                <StyledLink to={Paths.Blog}>Blog</StyledLink>
              </ListItem>
              <ListItem>
                <StyledLink to={Paths.Contacts}>Contacts</StyledLink>
              </ListItem>
              <ListItem>
                <StyledLink to={Paths.OurTeam}>Our team</StyledLink>
              </ListItem>
              <ListItem>
                <StyledLink to={Paths.AboutUs}>About us</StyledLink>
              </ListItem>
              <ListItem>
                <StyledLink to={Paths.Services}>Service</StyledLink>
              </ListItem>
              <ListItem>
                <StyledLink to={Paths.FAQs}>FAQ</StyledLink>
              </ListItem>
            </LinksList>
            <LinksList>
              <Tittle>Service</Tittle>
              <ListItem>
                <StyledLink to={Paths.NotFound}>Pages</StyledLink>
              </ListItem>
              <ListItem>
                <StyledLink to={Paths.NotFound}>Elements</StyledLink>
              </ListItem>
              <ListItem>
                <StyledLink to={Paths.FAQs}>FAQ</StyledLink>
              </ListItem>
              <ListItem>
                <StyledLink to={Paths.NotFound}>Pricing</StyledLink>
              </ListItem>
              <ListItem>
                <StyledLink to={Paths.NotFound}>Site map</StyledLink>
              </ListItem>
            </LinksList>
            <LinksList>
              <Tittle>Contact info</Tittle>
              <ListItem>
                <StyledLink to={Paths.NotFound}>ensome@info.co.us</StyledLink>
              </ListItem>
              <ListItem>
                <StyledLink to={Paths.NotFound}>+1 601-201-5580</StyledLink>
              </ListItem>
              <ListItem>
                <StyledLink to={Paths.NotFound}>
                  1642 Washington Avenue, Jackson, MS, Mississippi, 39201
                </StyledLink>
              </ListItem>
            </LinksList>
          </LinksContainer>
        </TopContainer>
        <SeparatorLine />
        <CopyrightContainer>
          <StyledText>Ensome© 2022 All Rights Reserved</StyledText>
          <PrivacyTermsContainer>
            <StyledText>Privacy policy</StyledText>
            <StyledText>Terms of us</StyledText>
          </PrivacyTermsContainer>
        </CopyrightContainer>
      </Wrapper>
    </FooterContainer>
  );
};
