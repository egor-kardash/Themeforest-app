import styled from 'styled-components';

import theme from '@/theme';

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  overflow-y: hidden;
  background: rgba(0, 0, 0, 0.7);
`;

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  /* background: ${theme.colors.black}; */
`;

export const ResizeItem = styled.div`
  padding-top: 56.25%;
`;

export const StyledVideo = styled.iframe`
  /* margin: 0; */
  position: absolute;
  top: 50%;
  left: 50%;
  /* margin-right: -50%; */
  transform: translate(-50%, -50%);
  width: 50%;
  height: 50%;
`;
