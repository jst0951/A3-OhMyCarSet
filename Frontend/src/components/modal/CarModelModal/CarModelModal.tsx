import { useLocation, useNavigate } from 'react-router-dom';
import Modal from '../../common/modal/Modal/Modal';
import { useSelfModeContext } from '@/contexts/SelfModeProvider';
import { useSelectOptionDispatch } from '@/contexts/SelectOptionProvider';
import { useSelectPackageDispatch } from '@/contexts/SelectPackageProvider';
import { useCurrentPackageDispatch } from '@/contexts/CurrentPackageProvider';
import { useModalDispatch } from '@/contexts/ModalProvider';
import { CANCEL_TEXT, CHANGE_TEXT } from '@/constants';

export default function CarModelModal() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { setSelfModeStep } = useSelfModeContext();
  const selectOptionDispatch = useSelectOptionDispatch();
  const selectPackageDispatch = useSelectPackageDispatch();
  const currentPackageDispatch = useCurrentPackageDispatch();
  const modalDispatch = useModalDispatch();

  const buttonLeft = {
    name: CHANGE_TEXT,
    onClick: () => handleOutClick(),
  };
  const buttonRight = {
    name: CANCEL_TEXT,
    onClick: () => handleClick(),
  };

  const handleClick = () => {
    if (pathname === '/') return;
    modalDispatch('CLOSE_MODAL');
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
        icon="ModalReloadIcon"
        title="모델을 변경하시겠어요?"
        description="모델을 변경하면 선택할 수 있는 옵션이 바뀌어요! \n 지금 변경하면 선택사항은 저장되지 않아요."
        buttonLeft={buttonLeft}
        buttonRight={buttonRight}
      />
    </>
  );
}
