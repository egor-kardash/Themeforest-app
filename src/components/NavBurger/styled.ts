import styled from 'styled-components';

import theme from '@/theme';
import { ToggleProps } from '@/types';

export const BurgerIcon = styled.div<ToggleProps>`
  display: none;
  width: 30px;
  height: 20px;

  div {
    background: ${({ isOpen }) =>
      isOpen ? `${theme.colors.black}` : `${theme.colors.primary}`};
    width: 100%;
    height: 12%;
    border-radius: 6px;

    transform-origin: 2.5px;
    transition: all 0.4s ease;

    &:nth-child(1) {
      transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg)' : 'rotate(0)')};
    }

    &:nth-child(2) {
      opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ isOpen }) => (isOpen ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    flex-flow: column wrap;
  }

  &:hover {
    cursor: pointer;
  }
`;
