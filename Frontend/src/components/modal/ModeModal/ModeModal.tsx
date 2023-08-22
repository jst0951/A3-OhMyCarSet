import Modal from '@/components/common/modal/Modal/Modal';
import { CANCEL_TEXT, CHANGE_TEXT, GUIDE_MODE_URL, SELF_MODE_URL } from '@/constants';
import { useCurrentPackageDispatch } from '@/contexts/CurrentPackageProvider';
import { useModalDispatch } from '@/contexts/ModalProvider';
import { useSelectOptionDispatch } from '@/contexts/SelectOptionProvider';
import { useSelectPackageDispatch } from '@/contexts/SelectPackageProvider';
import { useSelfModeContext } from '@/contexts/SelfModeProvider';
import { useNavigate } from 'react-router-dom';

interface Props {
  currentMode: 'SELF' | 'GUIDE';
}

export default function ModeModal({ currentMode }: Props) {
  const navigate = useNavigate();
  const { setSelfModeStep } = useSelfModeContext();
  const selectOptionDispatch = useSelectOptionDispatch();
  const selectPackageDispatch = useSelectPackageDispatch();
  const currentPackageDispatch = useCurrentPackageDispatch();
  const modalDispatch = useModalDispatch();

  const buttonLeft = {
    name: CANCEL_TEXT,
    onClick: () => modalDispatch({ type: 'CLOSE_MODAL' }),
  };
  const selfbuttonRight = {
    name: CHANGE_TEXT,
    onClick: () => handleChangeToSelf(),
  };

  const guidebuttonRight = {
    name: CHANGE_TEXT,
    onClick: () => handleChangeToGuide(),
  };

  const handleChangeToSelf = () => {
    modalDispatch({ type: 'CLOSE_MODAL' });
    setSelfModeStep(1);
    currentPackageDispatch({
      type: 'UPDATE_FILTER',
      payload: 1,
    });
    navigate(SELF_MODE_URL);
  };

  const handleChangeToGuide = () => {
    modalDispatch({ type: 'CLOSE_MODAL' });
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
    navigate(GUIDE_MODE_URL);
  };

  const selfToGuide = {
    title: '[가이드 모드]로 변경하시겠어요?',
    description: '변경하면 지금까지 선택했던 옵션들은 \n 저장되지 않아요.',
    buttonRight: guidebuttonRight,
  };

  const guideToSelf = {
    title: '[셀프 모드]로 변경하시겠어요?',
    description: '지금까지 선택했던 옵션들이 \n 유지된 채로 변경됩니다.',
    buttonRight: selfbuttonRight,
  };

  const mode = currentMode === 'SELF' ? selfToGuide : guideToSelf;

  return (
    <>
      <Modal
        icon="ModalReloadIcon"
        title={mode.title}
        description={mode.description}
        buttonLeft={buttonLeft}
        buttonRight={mode.buttonRight}
      />
    </>
  );
}
