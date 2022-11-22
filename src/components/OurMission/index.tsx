import React from 'react';

import ourMissionImage from '@/assets/images/our-mission-image.png';

import { OurMissionContainer, TextWrapper } from './styled';

export const OurMission = () => {
  return (
    <OurMissionContainer>
      <img src={ourMissionImage} />
      <TextWrapper>
        <h1>Our mission</h1>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
          <br />
          <br />
          Donec tincidunt tempor quam, non mollis quam finibus nec. Quisque
          finibus consequat felis vel pretium.
        </p>
      </TextWrapper>
    </OurMissionContainer>
  );
};
