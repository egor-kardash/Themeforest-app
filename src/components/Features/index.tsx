import React from 'react';

import { Link } from 'react-router-dom';

import features2Image from '@/assets/images/features-2.png';
import { Paths } from '@/constants';

import {
  DiscoverMoreButton,
  FeaturesContainer,
  FirstBlock,
  ImageWrapper,
  SecondBlock,
  SecondBlockHeadline,
  TextButtonWrapper,
} from './styled';

export const Features = () => {
  return (
    <FeaturesContainer>
      <FirstBlock>
        <h1>
          The <span>newest</span> business analytics platform
        </h1>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
        <DiscoverMoreButton to={Paths.Solutions}>
          Discover more
        </DiscoverMoreButton>
      </FirstBlock>
      <SecondBlock>
        <ImageWrapper>
          <img src={features2Image} />
        </ImageWrapper>
        
        {/* <SecondBlockHeadline> */}
        <h2>Radically new solutions for data</h2>
        <TextButtonWrapper>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
          <DiscoverMoreButton to={Paths.Solutions}>
            Discover More
          </DiscoverMoreButton>
        </TextButtonWrapper>
        {/* </SecondBlockHeadline> */}
      </SecondBlock>
    </FeaturesContainer>
  );
};
