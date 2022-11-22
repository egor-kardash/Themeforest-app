import React from 'react';

import { ReactComponent as Facebook } from '@/assets/icons/facebook.svg';
import { ReactComponent as Linkedin } from '@/assets/icons/linkedin.svg';
import { ReactComponent as Twitter } from '@/assets/icons/twitter.svg';

import {
  iconStyles,
  ImageWrapper,
  InfoItem,
  InfoListWrapper,
  SocialNetworksList,
  TeamMemberInfoContainer,
} from './styled';
import { TeamMemberInfoProps } from './types';

export const TeamMemberInfo = ({
  image,
  name,
  position,
  description,
  socialsNetworksLinks,
}: TeamMemberInfoProps) => {
  return (
    <TeamMemberInfoContainer>
      <ImageWrapper>
        <img src={image} alt='' title='' />
      </ImageWrapper>
      <InfoListWrapper>
        <InfoItem>
          <h6>Name</h6>
          <p>{name}</p>
        </InfoItem>
        <InfoItem>
          <h6>Position</h6>
          <p>{position}</p>
        </InfoItem>
        <InfoItem>
          <h6>Description</h6>
          <p>{description}</p>
        </InfoItem>
        <InfoItem>
          <h6>Social networks</h6>
          <SocialNetworksList>
            <a href={socialsNetworksLinks.facebook} target='_blank'>
              <Facebook style={iconStyles} />
            </a>
            <a href={socialsNetworksLinks.twitter} target='_blank'>
              <Twitter style={iconStyles} />
            </a>
            <a href={socialsNetworksLinks.linkedin} target='_blank'>
              <Linkedin style={iconStyles} />
            </a>
          </SocialNetworksList>
        </InfoItem>
      </InfoListWrapper>
    </TeamMemberInfoContainer>
  );
};
