import styled from 'styled-components';

import theme from '@/theme';

export const BlogSectionContainer = styled.section`
  width: 100%;
  max-width: 1141px;
  margin: 0 auto;
  padding: 0 16px;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 63px;
  margin-bottom: 120px;
`;

export const TittleControllerWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;

  h2 {
    font-weight: 800;
    font-size: 38px;
    line-height: 56px;
    color: ${theme.colors.black};
  }
`;
