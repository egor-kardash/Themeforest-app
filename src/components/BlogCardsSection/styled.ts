import styled from 'styled-components';

import theme from '@/theme';

export const BlogCardsContainer = styled.section`
  max-width: 1141px;
  padding: 0 16px;
  margin: 0 auto calc(50px + 70 * (100vw / 1920));

  display: flex;
  flex-flow: column nowrap;
  gap: 40px;

  @media (max-width: 768px) {
    max-width: 540px;
    margin-bottom: calc(50px + (70 + 70 * 0.7) * ((100vw - 360px) / 1920));
  }
`;

export const BlogList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const SeeMoreButton = styled.button`
  border: none;
  max-width: 540px;
  width: 100%;
  align-self: center;
  height: 54px;
  background: ${theme.colors.primary};
  box-shadow: 0px 12px 30px rgba(24, 92, 255, 0.18);
  border-radius: 6px;

  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: ${theme.colors.white};

  &:hover {
    cursor: pointer;
  }
`;
