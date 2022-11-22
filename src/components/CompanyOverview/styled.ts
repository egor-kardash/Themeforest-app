import styled from 'styled-components';

import '@fontsource/open-sans';
import theme from '@/theme';

export const CompanyOverviewContainer = styled.section`
  max-width: 1141px;
  width: 100%;
  padding: 0 16px;
  margin: 0 auto calc(50px + 70 * (100vw / 1920));
  display: grid;
  grid-template:
    'title title'
    'achievements description'
    'achievements description'
    'logos logos' / 1fr 1fr;

  align-items: center;
  gap: 50px 30px;

  @media (max-width: 1024px) {
    grid-template:
      'title title'
      'achievements achievements'
      'description description'
      'logos logos' / 1fr;
    grid-row-gap: calc(20px + 20 * (100vw) / 1024);
    grid-column-gap: 0;
  }

  h2 {
    text-align: center;
    grid-area: title;
  }

  p {
    grid-area: description;
    max-width: 540px;
    width: 100%;
    /* text-align: center; */
    align-self: center;
    font-family: 'Open Sans';
    font-size: calc(14px + 6 * (100vw / 1920));
    line-height: calc(24px + 9 * (100vw / 1920));
    color: ${theme.colors.grey};

    @media (max-width: 1024px) {
      justify-self: center;
      text-align: center;
    }
  }

  @media (max-width: 768px) {
    margin-bottom: calc(50px + (70 + 70 * 0.7) * ((100vw - 360px) / 1920));

    p {
      font-size: calc(14px + (6 + 6 * 0.7) * ((100vw - 360px) / 1920));
      line-height: calc(24px + (9 + 9 * 0.7) * ((100vw - 360px) / 1920));
    }
  }
`;

export const AchievementsContainer = styled.div`
  grid-area: achievements;
  max-width: 520px;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  /* align-self: center; */

  @media (max-width: 1024px) {
    justify-self: center;
    justify-content: center;
  }
`;

export const Achievement = styled.div`
  width: 150px;
  display: flex;
  flex-flow: column wrap;
  align-content: flex-start;

  span {
    font-family: 'Open Sans';
    font-weight: 800;
    font-size: calc(30px + 20 * (100vw / 1920));
    color: ${theme.colors.primary};
  }

  p {
    font-family: 'Open Sans';
    font-size: 16px;
    line-height: 28px;
    color: ${theme.colors.grey};
  }

  @media (max-width: 1024px) {
    align-items: center;
    justify-content: center;

    p {
      text-align: center;
      word-spacing: 100px;
      font-size: 14px;
      line-height: 24px;
    }

    &:nth-child(2) {
      order: 1;
    }
  }

  @media (max-width: 768px) {
    span {
      font-size: calc(30px + (20 + 20 * 0.7) * ((100vw - 360px) / 1920));
    }
  }
`;
