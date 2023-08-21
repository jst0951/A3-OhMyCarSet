import { useLocation, useNavigate } from 'react-router-dom';
import Modal from '../../common/modal/Modal/Modal';
import { useSelfModeContext } from '@/contexts/SelfModeProvider';
import { useSelectOptionDispatch } from '@/contexts/SelectOptionProvider';
import { useSelectPackageDispatch } from '@/contexts/SelectPackageProvider';
import { useCurrentPackageDispatch } from '@/contexts/CurrentPackageProvider';
import { useModalDispatch, useModalState } from '@/contexts/ModalProvider';

export default function HeaderLogoModal() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { setSelfModeStep } = useSelfModeContext();
  const selectOptionDispatch = useSelectOptionDispatch();
  const selectPackageDispatch = useSelectPackageDispatch();
  const currentPackageDispatch = useCurrentPackageDispatch();
  const modalDispatch = useModalDispatch();
  const { isOpen } = useModalState();

  const buttonLeft = {
    name: '나갈래요',
    onClick: () => handleOutClick(),
  };
  const buttonRight = {
    name: '나가지 않을래요!',
    onClick: () => handleClick(),
  };

  const handleClick = () => {
    if (pathname !== '/') {
      modalDispatch('GO_MAIN');
    }
    if (isOpen) {
      modalDispatch('CLOSE_MODAL');
    }
  };

  const handleOutClick = () => {
    modalDispatch('CLOSE_MODAL');
    setSelfModeStep(1);
    selectOptionDispatch({
      type: 'INIT_LIST',
    });
    selectPackageDispatch({
      type: 'INIT_LIST',
    });
    currentPackageDispatch({
      type: 'UPDATE_FILTER',
      payload: 1,
    });
    navigate('/');
  };

  return (
    <>
      <Modal
        icon="ModalCryIcon"
        title="내 차 만들기에서 나가시겠어요?"
        description="완료까지 얼마 남지 않았어요! \n 지금 종료하면 선택사항은 저장되지 않아요."
        buttonLeft={buttonLeft}
        buttonRight={buttonRight}
      />
    </>
  );
}
