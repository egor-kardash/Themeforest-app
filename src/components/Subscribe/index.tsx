import React from 'react';

import {
  Line,
  StyledButton,
  StyledInput,
  SubscribeSection,
  TextField,
  TittleDescription,
  Wrapper,
} from './styled';

export const Subscribe = () => {
  return (
    <SubscribeSection>
      <Wrapper>
        <TittleDescription>
          <h2>Subscribe to our newsletter</h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium.
          </p>
        </TittleDescription>
        <TextField>
          <StyledInput type='text' placeholder='Your email' />
          <StyledButton />
        </TextField>
      </Wrapper>
      {/* <Line /> */}
    </SubscribeSection>
  );
};
