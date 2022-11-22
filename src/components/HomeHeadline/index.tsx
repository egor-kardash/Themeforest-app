import React from 'react';

import headerHeadlineImage from '@/assets/images/header-headline-image.jpg';
import { Paths } from '@/constants';

import {
  HomeHeadlineContainer,
  ImageWrapper,
  LearnMoreLink,
  TextWrapper,
  Wrap,
} from './styled';

export const HomeHeadline = () => {
  return (
    <HomeHeadlineContainer>
      <TextWrapper>
        <h1>
          Find true power in your data with <span>Ensome</span>
        </h1>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque lauda, totam rem aperiam, eaque ipsa quae ab
          illo inventore veritatis et quasi.
        </p>
      </TextWrapper>
      <Wrap>
        <LearnMoreLink to={Paths.Services}>
          <button>Learn More</button>
        </LearnMoreLink>
        <ImageWrapper>
          <img src={headerHeadlineImage} />
        </ImageWrapper>
      </Wrap>
    </HomeHeadlineContainer>
  );
};
