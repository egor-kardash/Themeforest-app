import styled from 'styled-components';

import theme from '@/theme';

export const SolutionDescriptionContainer = styled.section`
  max-width: 1141px;
  width: 100%;
  padding: 0 16px;
  margin: 0 auto;
  margin-bottom: 120px;
  display: flex;
  flex-flow: row nowrap;
  gap: 126px;
`;

export const ContentList = styled.div`
  max-width: 635px;
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  gap: 70px;
`;

export const ContentItem = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  gap: 30px;

  h2 {
    font-weight: 800;
    font-size: 38px;
    line-height: 56px;
    color: ${theme.colors.black};
  }

  p {
    font-family: 'Open Sans';
    font-size: 20px;
    line-height: 33px;
    color: ${theme.colors.grey};
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  max-height: 250px;
  overflow: hidden;
  border-radius: 6px;

  img {
    width: 100%;
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

  a:visited,
  a:hover,
  a:active {
    color: inherit;
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
