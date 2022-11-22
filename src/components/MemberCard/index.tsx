import React, { forwardRef } from 'react';

import { Link } from 'react-router-dom';

import { Paths } from '@/constants';

import { CardDescription, MemberCardContainer } from './styled';
import { MemberCardProps } from './types';

export const MemberCard = forwardRef<HTMLAnchorElement, MemberCardProps>(
  ({ id, image, name, position }, ref) => {
    return (
      <MemberCardContainer to={`${Paths.OurTeam}/${id}`} src={image} ref={ref}>
        <CardDescription>
          <h5>{name}</h5>
          <p>{position}</p>
        </CardDescription>
      </MemberCardContainer>
    );
  },
);
