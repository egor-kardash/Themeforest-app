import styled from 'styled-components';

import theme from '@/theme';

export const ArticleContainer = styled.section`
  grid-area: article;
  display: flex;
  flex-flow: column wrap;
  gap: 30px;
`;

export const PreviewImageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  gap: 25px;

  & > img {
    width: 100%;
  }
`;

export const InfoBlock = styled.div`
  display: flex;
  gap: 30px;

  & > div {
    display: flex;
    align-items: center;
    gap: 8px;

    & > h6 {
      font-family: 'Open Sans';
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      color: ${theme.colors.grey};
    }

    & > span {
      padding: 3px 11px;
      font-weight: 800;
      font-size: 14px;
      line-height: 24px;

      color: ${theme.colors.primary};
      border: 1px solid ${theme.colors.background};
      border-radius: 6px;
    }
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 30px;

  & > p {
    font-family: 'Open Sans';
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: ${theme.colors.grey};
    white-space: pre-line;

    &:nth-child(2) {
      font-family: 'Open Sans';
      font-weight: 400;
      font-size: 20px;
      line-height: 33px;
      color: ${theme.colors.black};
      margin-left: 100px;
      padding-left: 34px;

      border-left: 4px solid ${theme.colors.primary};
    }
  }
`;

export const blogIconStyles = {
  width: '16px',
  height: '16px',
  color: `${theme.colors.grey}`,
};
