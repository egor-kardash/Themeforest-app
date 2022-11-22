import styled from 'styled-components';

import '@fontsource/open-sans';
import theme from '@/theme';

import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
  width: 100%;
  height: 530px;
  background: ${theme.colors.secondary};
`;

export const Wrapper = styled.div`
  max-width: 1141px;
  width: 100%;
  padding: 0 16px;
  margin: 0 auto;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
`;

export const SeparatorLine = styled.div`
  border-top: 1px solid ${theme.colors.helperBlue2};
  margin-bottom: 34px;
`;

export const CopyrightContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;

export const StyledText = styled.p`
  font-family: 'Open Sans';
  font-size: 14px;
  color: ${theme.colors.helperBlue2};
`;

export const Description = styled.div`
  font-family: 'Open Sans';
  line-height: 24px;
  font-size: 14px;
  color: ${theme.colors.grey};
`;

export const LinksContainer = styled.div`
  width: 55%;
  margin-top: 15px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  /* justify-content: space-between; */
`;

export const PrivacyTermsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 90px;
`;

export const LinksList = styled.ul`
  /* width: 150px; */
  /* width: 100%; */
  list-style: none;
  display: flex;
  flex-flow: column wrap;
  gap: 12px;

  &:nth-child(3) {
    min-width: 220px;
  }
`;

export const TopContainer = styled.div`
  margin: 50px 0 50px 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  /* gap: 190px; */
`;

export const ListItem = styled.li`
  text-decoration: none;
`;

export const StyledLink = styled(Link)`
  user-select: none;
  text-decoration: none;
  border: none;
  font-family: 'Open Sans';
  font-size: 14px;
  line-height: 24px;
  color: ${theme.colors.grey};

  &:hover {
    cursor: pointer;
  }
`;

export const Tittle = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 11px;
  color: ${theme.colors.white};
`;

export const RightContainer = styled.div`
  width: 285px;
  display: flex;
  flex-flow: column wrap;
  gap: 20px;

  & > img {
    width: calc(92px + 49 * (100vw / 1920));
  }

  @media (max-width: 768px) {
    img {
      width: calc(92px + (49 + 49 * 0.7) * ((100vw - 320px) / 1920));
    }
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 16px;
`;

export const FacebookIcon = styled.div`
  mask: url('${process.env.PUBLIC_URL}/assets/icons/facebook.svg');
  width: 25px;
  height: 25px;
  background: ${theme.colors.background};
`;

export const TwitterIcon = styled.div`
  mask: url('${process.env.PUBLIC_URL}/assets/icons/twitter.svg');
  width: 25px;
  height: 25px;
  background: ${theme.colors.background};
`;

export const LinkedInIcon = styled.div`
  mask: url('${process.env.PUBLIC_URL}/assets/icons/linkedin.svg');
  width: 25px;
  height: 25px;
  background: ${theme.colors.background};
`;

export const YoutubeIcon = styled.div`
  mask: url('${process.env.PUBLIC_URL}/assets/icons/youtube.svg');
  width: 25px;
  height: 25px;
  background: ${theme.colors.background};
`;

export const DribbbleIcon = styled.div`
  mask: url('${process.env.PUBLIC_URL}/assets/icons/dribbble.svg');
  width: 25px;
  height: 25px;
  background: ${theme.colors.background};
`;

export const BehanceIcon = styled.div`
  mask: url('${process.env.PUBLIC_URL}/assets/icons/behance.svg');
  width: 25px;
  height: 25px;
  background: ${theme.colors.background};
`;
