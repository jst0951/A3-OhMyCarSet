import { useModalState } from '@/contexts/ModalProvider';
import ModalPortal from '../common/modal/ModalPortal/ModalPortal';
import HeaderLogoModal from './HeaderLogoModal/HeaderLogoModal';
import CarModelModal from './CarModelModal/CarModelModal';
import ListModal from './ListModal/ListModal';
import ModeModal from './ModeModal/ModeModal';

export default function ModalContainer() {
  const { activeModal } = useModalState();

  if (activeModal === null) return;

  const ModalMap: Record<string, JSX.Element> = {
    main: <HeaderLogoModal />,
    model: <CarModelModal />,
    mode: <ListModal />,
    toSelf: <ModeModal currentMode="GUIDE" />,
    toGuide: <ModeModal currentMode="SELF" />,
  };

  return (
    <>
      <ModalPortal>{ModalMap[activeModal]}</ModalPortal>
    </>
  );
}
