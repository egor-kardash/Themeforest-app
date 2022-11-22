import styled from 'styled-components';

import theme from '@/theme';

export const AboutTeamContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  gap: 30px;

  img {
    width: 47.5%;
    height: auto;
    aspect-ratio: 16/12;

    @media (max-width: 1110px) {
      width: 100%;
    }
  }

  p {
    padding-right: 16px;
    max-width: 540px;
    font-family: 'Open Sans';
    font-size: 16px;
    line-height: 28px;
    color: ${theme.colors.grey};

    @media (max-width: 1110px) {
      padding: 0 16px;
      max-width: 100%;
    }
  }
`;
