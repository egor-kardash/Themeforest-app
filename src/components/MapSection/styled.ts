import styled from 'styled-components';

import theme from '@/theme';

export const MapContainer = styled.div`
  width: 100%;
  height: calc(290px + 170 * (100vw / 1920));

  @media (max-width: 768px) {
    height: calc(290px + (170 + 170 * 0.7) * ((100vw - 360px) / 1920));
  }
`;

export const mapStyle = {
  width: '100%',
  height: '100%',
};
