import styled from 'styled-components';

import checkMark from '@/assets/icons/check-mark.svg';
import theme from '@/theme';

export const PricingCardContainer = styled.div`
  /* max-width: 255px; */
  width: 100%;
  height: 525px;
  padding: 35px 20px;
  display: flex;
  flex-flow: column wrap;
  box-shadow: 0px 4px 12px rgba(12, 68, 204, 0.1);
  background: ${theme.colors.white};
  border-radius: 6px;
  gap: 30px;

  h6 {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: ${theme.colors.black};
    margin-bottom: -14px;
  }

  p {
    font-weight: 800;
    font-size: 26px;
    line-height: 40px;
    color: ${theme.colors.black};

    &::before {
      content: '$';
      float: left;
    }
  }
`;

export const ChoosePlanButton = styled.button`
  width: 100%;
  height: 44px;

  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  border: none;
  border-radius: 6px;

  background: ${theme.colors.primary};
  color: ${theme.colors.white};

  &:hover {
    cursor: pointer;
    background: ${theme.colors.lightBlue};
  }

  &::after {
    content: 'Choose plan';
  }
`;

export const ServiceList = styled.ul`
  display: flex;
  flex-flow: column wrap;
  gap: 16px;
  list-style-type: none;

  li {
    font-family: 'Open Sans';
    font-size: 14px;
    line-height: 24px;

    color: ${theme.colors.black};

    &::before {
      content: '';
      display: block;
      background: url('${checkMark}') no-repeat center;
      width: 25px;
      height: 25px;
      float: left;
      margin-right: 7px;
    }
  }
`;
