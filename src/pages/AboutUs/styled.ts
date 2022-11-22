import styled from 'styled-components';

import theme from '@/theme';

export const HeadlineWrapper = styled.div`
  height: 250px;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  background: ${theme.colors.background};
  margin-bottom: 120px;

  h1 {
    font-weight: 800;
    font-size: 46px;
    line-height: 60px;
    color: ${theme.colors.black};
  }
`;
