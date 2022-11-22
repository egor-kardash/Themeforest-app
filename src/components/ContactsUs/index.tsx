import React from 'react';

import { ContactUsButton, ContentContainer, Wrapper } from './styled';

export const ContactsUs = () => {
  return (
    <ContentContainer>
      <Wrapper>
        <h2>Do you need help?</h2>
        <p>
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscipit laboriosam, nisi ut aliquid ex ea commodi.
        </p>
        <ContactUsButton />
      </Wrapper>
    </ContentContainer>
  );
};
