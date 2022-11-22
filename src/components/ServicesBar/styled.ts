import styled from 'styled-components';

import arrowRight from '@/assets/icons/arrow-right.svg';
import theme from '@/theme';

export const ServicesBarContainer = styled.div`
  grid-area: services-bar;
  align-self: start;
  max-width: 540px;
  width: 100%;

  & > ul {
    list-style-type: none;

    & > li {
      width: 100%;
      padding: 15px 0;
      border-bottom: 2px solid ${theme.colors.grey};

      font-weight: 700;
      font-size: calc(16px + 4 * (100vw / 1920));
      line-height: calc(24px + 9 * (100vw / 1920));
      color: ${theme.colors.black};

      & > a {
        width: 100%;
        color: inherit;
        text-decoration: inherit;
        display: flex;
        align-items: center;
        justify-content: space-between;

        &::after {
          content: '';
          display: block;
          /* float: right; */
          background: ${theme.colors.black};
          mask: url(${arrowRight}) center;
          width: 20px;
          height: 20px;
        }

        &:hover::after {
          background: ${theme.colors.primary};
        }

        &:hover {
          color: ${theme.colors.primary};
        }
      }

      @media (max-width: 768px) {
        font-size: calc(16px + (4 + 4 * 0.7) * ((100vw - 360px) / 1920));
        line-height: calc(24px + (9 + 9 * 0.7) * ((100vw - 360px) / 1920));
      }
    }
  }

  @media (max-width: 1024px) {
    max-width: none;
    width: 100%;
  }
`;
