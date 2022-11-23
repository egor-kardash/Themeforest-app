import styled from 'styled-components';

import theme from '@/theme';
import { Link } from 'react-router-dom';

export const BlogSectionContainer = styled.section`
  width: 100%;
  max-width: 1141px;
  margin: 0 auto calc(50px + 70 * (100vw / 1920));
  padding: 0 16px;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 63px;

  @media (max-width: 1140px) {
    max-width: 760px;
  }

  @media (max-width: 768px) {
    gap: 30px;
    max-width: 500px;
    margin-bottom: calc(50px + (70 + 70 * 0.7) * ((100vw - 360px) / 1920));

    h2 {
      margin-bottom: 5px;
    }
  }
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

export const LearnMoreButton = styled(Link)`
  display: flex;
  justify-content: center;
  padding: 15px 0;

  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: ${theme.colors.white};
  background: ${theme.colors.primary};

  border: none;
  border-radius: 6px;

  & {
    text-decoration: none;
  }

  &:hover {
    cursor: pointer;
    background: ${theme.colors.lightBlue};
    box-shadow: 0px 12px 30px rgba(24, 92, 255, 0.18);
  }

  &::after {
    content: 'Learn more';
  }
`;
