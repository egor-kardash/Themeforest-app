import React from 'react';

import { useMediaQuery } from 'react-responsive';

import {
  ImageNameContainer,
  NameContainer,
  TestimonialsCardContainer,
} from './styled';
import { TestimonialsCardProps } from './types';

export const TestimonialsCard = ({
  image,
  fullname,
  position,
  description,
}: TestimonialsCardProps) => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <TestimonialsCardContainer>
      <ImageNameContainer>
        <img src={image} alt='Person image' title={`${fullname} image`} />
        <NameContainer>
          <h6>{fullname}</h6>
          <p>{position}</p>
        </NameContainer>
      </ImageNameContainer>
      <p>{isTabletOrMobile ? description.mobile : description.laptop}</p>
    </TestimonialsCardContainer>
  );
};
