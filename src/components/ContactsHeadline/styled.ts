import styled from 'styled-components';

import '@fontsource/open-sans';
import theme from '@/theme';

export const ContactsHeadlineContainer = styled.div`
  max-width: 1141px;
  margin: 0 auto;
  padding: 0 16px;
  margin-bottom: calc(50px + 70 * (100vw / 1920));
  display: grid;

  grid-template:
    'title contact-form'
    'contacts contacts' / 1fr 1fr;

  column-gap: 25px;

  & > h1 {
    grid-area: title;
    max-width: 480px;
    font-weight: 800;
    font-size: calc(30px + 50 * (100vw / 1920));
    line-height: calc(40px + 48 * (100vw / 1920));
    color: ${theme.colors.black};

    span {
      color: ${theme.colors.primary};
    }
  }

  @media (max-width: 1200px) {
    h1 {
      max-width: 350px;
    }
  }

  @media (max-width: 768px) {
    margin-bottom: calc(50px + (70 + 70 * 0.7) * ((100vw - 360px) / 1920));
    max-width: 560px;

    grid-template:
      'title '
      'contact-form'
      'contacts' / 1fr;
    justify-content: center;
    gap: 40px;

    h1 {
      max-width: 100%;
      font-size: calc(30px + (50 + 50 * 0.7) * ((100vw - 360px) / 1920));
      line-height: calc(40px + (48 + 48 * 0.7) * ((100vw - 360px) / 1920));
    }
  }
`;
