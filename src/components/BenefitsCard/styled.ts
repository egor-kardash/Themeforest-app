import styled from 'styled-components';

import theme from '@/theme';

export const BenefitsCardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  padding: 25px;
  gap: 10px;
  border-radius: 6px;
  background: ${theme.colors.white};
  box-shadow: 0px 12px 30px 17px rgba(24, 92, 255, 0.04);

  &:nth-child(even) {
    margin-top: 50px;
    margin-bottom: -50px;
  }

  img {
    width: 45px;
    height: 45px;
  }

  h5 {
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    color: ${theme.colors.black};
  }

  p {
    font-family: 'Open Sans';
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: ${theme.colors.grey};
  }
`;
