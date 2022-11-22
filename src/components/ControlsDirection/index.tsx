import React from 'react';

import { ButtonNext, ButtonPrev, ControlsDirectionContainer } from './styled';

export const ControlsDirection = () => {
  return (
    <ControlsDirectionContainer>
      <ButtonPrev className='button-prev' />
      <ButtonNext className='button-next' />
    </ControlsDirectionContainer>
  );
};
