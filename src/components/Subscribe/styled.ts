import styled from 'styled-components';

import '@fontsource/open-sans';
import theme from '@/theme';

export const SubscribeSection = styled.section`
  width: 100%;
  height: auto;
  min-height: 306px;
  background: ${theme.colors.secondary};
  border-bottom: 1px solid ${theme.colors.helperBlue2};
  //margin: 0;
`;

export const Wrapper = styled.div`
  max-width: 1141px;
  min-height: 306px;
  margin: 0 auto;
  padding: calc(50px + 30 * (100vw / 1920)) 16px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  background: ${theme.colors.secondary};
  /* border-bottom: 1px solid ${theme.colors.helperBlue2}; */

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }

  @media (max-width: 768px) {
    min-height: 335px;
  }
`;

export const TittleDescription = styled.div`
  max-width: 540px;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  gap: 20px;

  h2 {
    font-size: calc(30px + 8 * (100vw / 1920));
    line-height: calc(40px + 16 * (100vw / 1920));
    color: ${theme.colors.white};
  }

  p {
    font-family: 'Open Sans';
    font-size: calc(16px + 4 * (100vw / 1920));
    line-height: calc(28px + 5 * (100vw / 1920));
    color: ${theme.colors.grey};

    /* @media (max-width: 1024px) {
      display: none;
    } */
  }

  @media (max-width: 1024px) {
    align-items: center;
    text-align: center;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: calc(30px + (8 + 8 * 0.7) * ((100vw - 320px) / 1920));
      line-height: calc(40px + (16 + 16 * 0.7) * ((100vw - 320px) / 1920));
    }

    p {
      font-size: calc(16px + (4 + 4 * 0.7) * ((100vw - 320px) / 1920));
      line-height: calc(28px + (5 + 5 * 0.7) * ((100vw - 320px) / 1920));
    }
  }

  @media (max-width: 480px) {
    p {
      display: none;
    }
  }
`;

export const TextField = styled.div`
  max-width: 445px;
  width: 100%;
  height: 54px;
  display: flex;
  flex-flow: row wrap;
  align-self: center;
  border-radius: 6px;
  background: ${theme.colors.helperBlue3};

  @media (max-width: 768px) {
    display: flex;
    flex-flow: column wrap;
    width: 100%;
  }

  @media (max-width: 1024px) {
    display: flex;
    flex-flow: column wrap;
    width: 100%;
    height: auto;
    background: none;
    gap: 20px;

    input {
      height: 54px;
      flex: unset;
      border: 1px solid ${theme.colors.helperBlue2};
      color: ${theme.colors.helperBlue2};
      background: none;

      &::placeholder {
        color: ${theme.colors.helperBlue2};
      }
    }

    button {
      height: 54px;
      width: 100%;
      color: ${theme.colors.secondary};
    }
  }
`;

export const StyledInput = styled.input`
  flex: 1;
  font-family: 'Open Sans';
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  padding: 0 25px;
  border: none;
  border-radius: 6px;
  background: ${theme.colors.helperBlue3};
  color: ${theme.colors.black};

  &:focus {
    outline: none;
  }
`;

export const StyledButton = styled.button`
  width: 125px;
  height: 100%;
  font-weight: 700;
  font-size: 16px;
  background: ${theme.colors.white};
  color: ${theme.colors.black};
  border: none;
  border-radius: 6px;

  &:after {
    content: 'Send';
  }

  @media (max-width: 768px) {
    &:after {
      content: 'Subscribe';
    }
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background: ${theme.colors.helperBlue2};
`;
