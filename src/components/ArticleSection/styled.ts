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

  /* & > img {
    width: 100%;
  } */
`;

export const InfoBlock = styled.div`
  display: flex;
  flex-flow: row wrap;
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

  @media (max-width: 1024px) {
    gap: 24px;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 30px;

  & > p {
    font-family: 'Open Sans';
    font-weight: 400;
    font-size: calc(14px + 2 * (100vw / 1920));
    line-height: calc(24px + 4 * (100vw / 1920));
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

  @media (max-width: 1024px) {
    & > p {
      &:nth-child(2) {
        margin: 0;
      }
    }
  }

  @media (max-width: 768px) {
    & > p {
      font-size: calc(14px + (2 + 2 * 0.7) * ((100vw - 360px) / 1920));
      line-height: calc(24px + (4 + 4 * 0.7) * ((100vw - 306px) / 1920));
    }
  }
`;

export const blogIconStyles = {
  width: '16px',
  height: '16px',
  color: `${theme.colors.grey}`,
};

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
