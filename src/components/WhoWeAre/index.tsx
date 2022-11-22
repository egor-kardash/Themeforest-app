import React from 'react';

import whoWeAreImage from '@/assets/images/who-we-are-image.png';

import { TextWrapper, WhoWeAreContainer } from './styled';

export const WhoWeAre = () => {
  return (
    <WhoWeAreContainer>
      <TextWrapper>
        <h1>Who we are</h1>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
          <br />
          <br />
          Donec tincidunt tempor quam, non mollis quam finibus nec. Quisque
          finibus consequat felis vel pretium. Aliquam gravida nisi vel
          convallis ultricies.
        </p>
      </TextWrapper>
      <img src={whoWeAreImage} />
    </WhoWeAreContainer>
  );
};
