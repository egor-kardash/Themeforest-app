import styled from 'styled-components';

import '@fontsource/open-sans';
import theme from '@/theme';

export const ContactList = styled.div`
  grid-area: contacts;
  display: flex;
  flex-flow: row wrap;
  gap: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const ContactItem = styled.div`
  display: grid;
  grid-template:
    'icon label'
    'text text' / 30px auto;

  & > img {
    grid-area: icon;
    align-self: center;
  }

  & > h6 {
    grid-area: label;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: ${theme.colors.black};
  }

  & > p {
    grid-area: text;
    font-family: 'Open Sans';
    font-size: 16px;
    line-height: 28px;
    color: ${theme.colors.grey};
  }
`;
