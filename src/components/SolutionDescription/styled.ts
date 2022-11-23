import styled from 'styled-components';

import theme from '@/theme';

export const SolutionDescriptionContainer = styled.section`
  max-width: 1141px;
  width: 100%;
  padding: 0 16px;
  margin: 0 auto calc(50px + 70 * (100vw / 1920));
  display: flex;
  flex-flow: row nowrap;
  gap: 126px;

  white-space: pre-line;

  @media (max-width: 1024px) {
    justify-content: center;
  }

  @media (max-width: 768px) {
    margin-bottom: calc(50px + (70 + 70 * 0.7) * ((100vw - 360px) / 1920));
  }
`;

export const ContentList = styled.div`
  max-width: 635px;
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  gap: calc(40px + 30 * (100vw / 1920));

  @media (max-width: 768px) {
    gap: calc(40px + (30 + 30 * 0.7) * ((100vw - 360px) / 1920));
  }
`;

export const ContentItem = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  gap: calc(20px + 10 * (100vw / 1920));

  h2 {
    font-weight: 800;
    font-size: calc(22px + 16 * (100vw / 1920));
    line-height: calc(33px + 23 * (100vw / 1920));
    color: ${theme.colors.black};
  }

  p,
  li {
    font-family: 'Open Sans';
    font-size: calc(14px + 6 * (100vw / 1920));
    line-height: calc(24px + 9 * (100vw / 1920));
    color: ${theme.colors.grey};
  }

  & > ul {
    display: flex;
    flex-flow: column wrap;
    list-style-type: disc;
    list-style-position: revert;
    gap: 25px;

    li {
      margin-left: 1em;
    }

    li::marker {
      font-size: 24px;
      color: ${theme.colors.black};
      height: auto;
    }
  }

  @media (max-width: 768px) {
    gap: calc(20px + (10 + 10 * 0.7) * ((100vw - 360px) / 1920));

    p,
    li {
      font-size: calc(14px + (6 + 6 * 0.7) * ((100vw - 360px) / 1920));
      line-height: calc(24px + (9 + 9 * 0.7) * ((100vw - 360px) / 1920));
    }

    h2 {
      font-weight: 700;
      font-size: calc(22px + (16 + 16 * 0.7) * ((100vw - 360px) / 1920));
      line-height: calc(33px + (23 + 23 * 0.7) * ((100vw - 360px) / 1920));
    }
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-top: calc(100% * (100 / 180));

  img {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 6px;
  }
`;

export const SideBar = styled.div`
  width: 255px;
  position: sticky;
  top: 115px;
  align-self: flex-start;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: ${theme.colors.black};
  margin-top: 15px;

  display: flex;
  flex-flow: column wrap;
`;

export const Tab = styled.div`
  height: 60px;
  display: flex;
  flex-flow: row nowrap;
  /* padding: 18px 30px 18px 0; */
  gap: 30px;

  & > a {
    color: inherit;
    text-decoration: none;
  }

  a {
    /* padding: 18px 30px 18px 0; */
    text-decoration: none;
    display: flex;
    align-items: center;

    &::before {
      content: '';
      margin-right: 30px;
      padding: 0;
      display: block;
      height: 100%;
      width: 5px;
      background: ${theme.colors.primary};
    }
  }

  &:nth-child(n + 2) a::before {
    background: ${theme.colors.helperBlue3};
  }
`;
