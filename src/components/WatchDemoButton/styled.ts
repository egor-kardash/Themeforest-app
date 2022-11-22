import styled from 'styled-components';

import theme from '@/theme';

export const PlayCircleIcon = styled.div`
  mask: url('${process.env.PUBLIC_URL}/assets/icons/play-circle.svg');
  width: 24px;
  height: 24px;
  background-color: ${theme.colors.white};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;

  width: 168px;
  height: 44px;

  background: ${theme.colors.primary};
  border-radius: 6px;

  &:hover {
    cursor: pointer;
    background: ${theme.colors.lightBlue};
    box-shadow: 0px 12px 30px rgba(24, 92, 255, 0.18);
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

export const StyledText = styled.div`
  font-weight: 600;
  user-select: none;
  font-size: 14px;
  color: ${theme.colors.white};
`;
