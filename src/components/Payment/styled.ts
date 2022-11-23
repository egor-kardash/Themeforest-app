import styled from 'styled-components';

import theme from '@/theme';

export const PaymentForm = styled.form<{
  ref: React.RefObject<HTMLFormElement>;
}>`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  gap: 20px;

  & > input {
    width: 100%;
    height: 54px;
    padding: 0 25px;
    font-family: 'Open Sans';
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    border: 1px solid ${theme.colors.grey};
    border-radius: 6px;
  }
`;
