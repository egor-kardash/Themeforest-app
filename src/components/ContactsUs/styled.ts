import styled from 'styled-components';

import '@fontsource/open-sans';
import theme from '@/theme';

export const ContentContainer = styled.section`
  width: 100%;
  height: 28vw;
  min-height: 335px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${theme.colors.background};
`;

export const Wrapper = styled.div`
  width: 540px;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  gap: 30px;

  h2 {
    font-weight: 800;
    font-size: calc(30px + 8 * (100vw / 1920));
    line-height: calc(40px + 16 * (100vw / 1920));
    color: ${theme.colors.black};
  }

  p {
    font-family: 'Open Sans';
    text-align: center;
    font-size: calc(14px + 2 * (100vw / 1920));
    line-height: calc(24px + 4 * (100vw / 1920));
    color: ${theme.colors.grey};
  }

  @media (max-width: 768px) {
    h2 {
      font-size: calc(30px + (8 + 8 * 0.7) * ((100vw - 320px) / 1920));
      font-weight: calc(40px + (16 + 16 * 0.7) * ((100vw - 320px) / 1920));
    }

    p {
      /* font-size: calc(14px + (2 + 2 * 0.7) * ((100vw - 320px) / 1920)); */
      font-size: 14px;
      /* font-weight: calc(24px + (4 + 4 * 0.7) * ((100vw - 320px) / 1920)); */
      font-weight: 24px;
      letter-spacing: -0.4px;
    }
  }
`;

export const ContactUsButton = styled.button`
  width: 190px;
  height: 54px;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  border: none;
  border-radius: 6px;
  background: ${theme.colors.primary};
  color: ${theme.colors.white};

  &:hover {
    cursor: pointer;
  }

  &:after {
    content: 'Contact Us';
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;
