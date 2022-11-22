import { useEffect } from 'react';

import { useScrollHide } from '@/hooks/useScrollHide';

import { ModalContainer, Overlay, ResizeItem, StyledVideo } from './styled';
import { VideoProps } from './types';

export const Video = ({ isOpen, onClose }: VideoProps) => {
  const scrollIsHide = useScrollHide(isOpen);

  return isOpen ? (
    <Overlay onClick={onClose}>
      <ModalContainer>
        <ResizeItem />
        <StyledVideo
          src='https://www.youtube.com/embed/WMO9aarO390?autoplay=1'
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        />
      </ModalContainer>
    </Overlay>
  ) : null;
};
