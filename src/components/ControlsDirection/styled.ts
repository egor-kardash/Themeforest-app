import styled from 'styled-components';

import arrowNext from '@/assets/icons/arrow-next.svg';
import arrowPrev from '@/assets/icons/arrow-prev.svg';
import theme from '@/theme';

export const ControlsDirectionContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  gap: calc(8px + 7 * (100vw / 1920));

  & > div {
    &::after {
      width: calc(16px + 8 * (100vw / 1920));
      height: calc(16px + 8 * (100vw / 1920));

      @media (max-width: 768px) {
        width: calc(16px + (8 + 8 * 0.7) * ((100vw - 360px) / 1920));
        height: calc(16px + (8 + 8 * 0.7) * ((100vw - 360px) / 1920));
      }
    }
  }

  @media (max-width: 768px) {
    gap: calc(8px + (7 + 7 * 0.7) * ((100vw - 360px) / 1920));
  }
`;

export const ButtonPrev = styled.div`
  width: calc(48px + 62 * (100vw / 1920));
  height: calc(40px + 20 * (100vw / 1920));
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background-color: ${theme.colors.background};

  &::after {
    content: '';
    display: block;
    background: ${theme.colors.secondary};
    mask: url(${arrowPrev}) no-repeat center;
  }

  &.swiper-button-disabled::after {
    background-color: ${theme.colors.helperBlue3};
  }

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    border-radius: 14px;

    width: calc(48px + (62 + 62 * 0.7) * ((100vw - 360px) / 1920));
    height: calc(40px + (20 + 20 * 0.7) * ((100vw - 360px) / 1920));
  }
`;

export const ButtonNext = styled.div`
  width: calc(48px + 62 * (100vw / 1920));
  height: calc(40px + 20 * (100vw / 1920));
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background-color: ${theme.colors.background};

  &::after {
    content: '';
    display: block;
    background-color: ${theme.colors.secondary};
    mask: url(${arrowNext}) no-repeat center;
  }

  &.swiper-button-disabled::after {
    background-color: ${theme.colors.helperBlue3};
  }

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    border-radius: 14px;

    width: calc(48px + (62 + 62 * 0.7) * ((100vw - 360px) / 1920));
    height: calc(40px + (20 + 20 * 0.7) * ((100vw - 360px) / 1920));
  }
`;
