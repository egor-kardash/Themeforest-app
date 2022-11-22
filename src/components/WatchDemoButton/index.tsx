import { useToggle } from '@/hooks/useToggle';

import { Modal } from '../Modal';
import { Video } from '../Video';
import { Container, PlayCircleIcon, StyledText } from './styled';

export const WatchDemoButton = () => {
  const [isOpen, setIsOpen] = useToggle();

  return (
    <>
      <Container onClick={setIsOpen}>
        <PlayCircleIcon />
        <StyledText>Watch the demo</StyledText>
      </Container>
      <Modal>
        <Video isOpen={isOpen} onClose={setIsOpen} />
      </Modal>
    </>
  );
};
