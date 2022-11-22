import React, { ReactNode, useEffect, useState } from 'react';

import { createPortal } from 'react-dom';

import { ModalContainer, Overlay, Video, VideoItem } from './styled';

type ModalProps = {
  children: ReactNode;
};

export const Modal = ({ children }: ModalProps) => {
  const [domIsRendered, setDomIsRendered] = useState(false);

  useEffect(() => {
    setDomIsRendered(true);
    const modalRoot = document.createElement('div');
    modalRoot.id = 'modal-root';
    document.body.appendChild(modalRoot);

    return () => {
      document.body.removeChild(modalRoot);
    };
  }, []);

  return domIsRendered
    ? createPortal(children, document.getElementById('modal-root')!)
    : null;
};
