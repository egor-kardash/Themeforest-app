import styled from 'styled-components';

import theme from '@/theme';

export const TestimonialsCardContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 35px;
  box-shadow: 0px 3px 10px rgba(12, 68, 204, 0.1);
  display: flex;
  flex-flow: column wrap;
  gap: 25px;
  /* margin: 5px; */

  & > p {
    font-family: 'Open Sans';
    font-size: 16px;
    line-height: 28px;
    color: ${theme.colors.grey};
  }
`;

export const ImageNameContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  gap: 25px;

  & > img {
    width: calc(50px + 30 * (100vw / 1920));
    border-radius: 50%;
  }

  @media (max-width: 768px) {
    img {
      width: calc(50px + (30 + 30 * 0.7) * ((100vw - 360px) / 1920));
    }
  }
`;

export const NameContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  gap: 4px;

  & > h6 {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: ${theme.colors.black};
  }

  & > p {
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: ${theme.colors.grey};
  }
`;
