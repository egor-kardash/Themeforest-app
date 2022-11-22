import styled from 'styled-components';

import dataLineIcon from '@/assets/icons/data-line.svg';
import shareIcon from '@/assets/icons/share.svg';
import tagIcon from '@/assets/icons/tag.svg';
import theme from '@/theme';

export const BlogDescriptionContainer = styled.section`
  max-width: 1141px;
  width: 100%;
  padding: 0 16px;
  margin: 0 auto calc(50px + 70 * (100vw / 1920));
  display: grid;
  grid-template: 'article side-bar' / 55% auto;
  gap: 30px;

  h4 {
    font-weight: 700;
    font-size: 22px;
    line-height: 33px;
    color: ${theme.colors.black};
  }

  @media (max-width: 768px) {
    margin-bottom: calc(50px + (70 + 70 * 0.7) * ((100vw - 360px) / 1920));
  }
`;

export const SideBar = styled.div`
  width: 100%;
  grid-area: side-bar;
  display: flex;
  flex-flow: column wrap;
  align-items: flex-start;
  gap: 60px;
`;

export const TagsBar = styled.div`
  display: flex;
  flex-flow: column wrap;
  gap: 30px;
  width: 100%;

  & > div {
    display: flex;
    flex-flow: row wrap;
    gap: 8px;

    & > span {
      padding: 3px 11px;
      font-weight: 800;
      font-size: 14px;
      line-height: 24px;

      color: ${theme.colors.primary};
      border: 1px solid ${theme.colors.background};
      border-radius: 6px;

      &:nth-child(1) {
        border: none;
        background: ${theme.colors.primary};
        color: ${theme.colors.white};
      }

      &:hover {
        cursor: pointer;

        border: none;
        background: ${theme.colors.primary};
        color: ${theme.colors.white};
      }
    }
  }
`;
