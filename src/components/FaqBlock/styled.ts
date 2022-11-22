import styled from 'styled-components';

import theme from '@/theme';
import { ToggleProps } from '@/types';

export const BlockContent = styled.div<ToggleProps>`
  width: 100%;
  padding: 35px;
  display: flex;
  align-items: center;
  flex-flow: row wrap;
  border: 1px solid ${theme.colors.grey};
  border-radius: 6px;

  &:hover {
    cursor: pointer;
  }

  & > div {
    &:nth-child(2) {
      & > div {
        & > p {
          width: 95%;
          margin-top: 15px;
          font-family: 'Open Sans';
          font-size: calc(14px + 6 * (100vw / 1920));
          line-height: calc(24px + 9 * (100vw / 1920));
          color: ${theme.colors.grey};

          @media (max-width: 768px) {
            font-size: calc(14px + (6 + 6 * 0.7) * ((100vw - 360px) / 1920));
            line-height: calc(24px + (9 + 9 * 0.7) * ((100vw - 360px) / 1920));
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    padding: 22px 15px;
  }
`;

export const Wrapper = styled.div<{ isOpen: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  justify-content: space-between;

  & > h4 {
    font-weight: 700;
    font-size: calc(16px + 8 * (100vw / 1920));
    line-height: calc(24px + 9 * (100vw / 1920));
    color: ${({ isOpen }) =>
      isOpen ? `${theme.colors.primary}` : `${theme.colors.black}`};
    transition: color 0.3s ease;
  }

  @media (max-width: 768px) {
    h4 {
      font-size: calc(16px + (6 + 6 * 0.7) * ((100vw - 320px) / 1920));
      line-height: calc(24px + (9 + 9 * 0.7) * ((100vw - 320px) / 1920));
    }
  }

  @media (max-width: 480px) {
    h4 {
      max-width: 280px;
      width: 100%;
    }
  }

  @media (max-width: 400px) {
    h4 {
      max-width: 240px;
      width: 100%;
    }
  }
`;

export const TogglerIcon = styled.div<ToggleProps>`
  width: 18px;
  height: 18px;
  display: flex;
  justify-content: center;
  flex-direction: column;

  div {
    width: 18px;
    height: 2.5px;
    position: absolute;
    background: ${({ isOpen }) =>
      isOpen ? `${theme.colors.primary}` : `${theme.colors.black}`};

    border-radius: 2px;
    transform-origin: center;
    transition: all 0.5s ease;

    &:nth-child(1) {
      align-self: center;
      transform: ${({ isOpen }) => (isOpen ? 'rotate(0)' : 'rotate(90deg)')};
      opacity: 1;
    }
    &:nth-child(2) {
      align-self: center;
      opacity: 1;
    }
  }
`;
