import { Link } from 'react-router-dom';
import styled from 'styled-components';

import theme from '@/theme';

export const BreadcrumbContainer = styled.div`
  max-width: 1141px;
  margin: 25px auto;
  padding: 0 16px;
  display: flex;
  flex-flow: row wrap;
  gap: 9px;
`;

export const BaseLocation = styled(Link)<{ isLast: boolean }>`
  font-weight: ${({ isLast }) => (isLast ? 600 : 500)};
  font-size: 14px;
  line-height: 24px;
  color: ${({ isLast }) => (isLast ? theme.colors.black : theme.colors.grey)};
  text-decoration: none;
  pointer-events: ${({ isLast }) => (isLast ? 'none' : 'auto')};
`;

export const DividerLine = styled.div<{ isLast: boolean }>`
  display: ${({ isLast }) => (isLast ? 'none' : 'block')};
  mask: url('${process.env.PUBLIC_URL}/assets/icons/divider-line.svg');
  width: 2px;
  height: 14px;
  align-self: center;
  background: ${theme.colors.grey};
`;
