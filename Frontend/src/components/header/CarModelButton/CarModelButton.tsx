import Icon from '@/components/common/Icon';
import ModalPortal from '@/components/common/modal/ModalPortal/ModalPortal';
import Modal from '@/components/common/modal/Modal/Modal';
import { useModalContext } from '@/contexts/ModalProvider';
import { useSelfModeContext } from '@/contexts/SelfModeProvider';
import { useSelectOptionDispatch } from '@/contexts/SelectOptionProvider';
import { useSelectPackageDispatch } from '@/contexts/SelectPackageProvider';
import { useCurrentPackageDispatch } from '@/contexts/CurrentPackageProvider';

import { useNavigate } from 'react-router-dom';

import * as S from './CarModelButton.style';
import { useState } from 'react';

type Props = {
  pathName: string;
};

export default function CarModelButton({ pathName }: Props) {
  const navigate = useNavigate();
  const [isModel, setIsModel] = useState(false);
  const { open, setOpen } = useModalContext();
  const { setSelfModeStep } = useSelfModeContext();
  const selectOptionDispatch = useSelectOptionDispatch();
  const selectPackageDispatch = useSelectPackageDispatch();
  const currentPackageDispatch = useCurrentPackageDispatch();
  const buttonLeft = {
    name: '변경할래요!',
    onClick: () => handleOutClick(),
  };
  const buttonRight = {
    name: '안할래요',
    onClick: () => handleClick(),
  };

  const handleClick = () => {
    if (pathName !== '/' && pathName !== '/guide-mode') {
      setOpen(true);
      setIsModel(true);
    }
    if (open) {
      setOpen(false);
      setIsModel(false);
    }
  };

  const handleOutClick = () => {
    if (open) {
      setOpen(false);
      setIsModel(false);
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
    }
  };

  return (
    <>
      <S.CarModelContainer onClick={() => handleClick()}>
        <Icon icon="HeaderCarIcon" />
        <S.CarModelText>펠리세이드</S.CarModelText>
        <Icon icon="HeaderMoreIcon" />
      </S.CarModelContainer>
      {isModel && (
        <ModalPortal>
          <Modal
            icon="ModalReloadIcon"
            title="모델을 변경하시겠어요?"
            description="모델을 변경하면 선택할 수 있는 옵션이 바뀌어요!
          \n 지금 변경하면 선택사항은 저장되지 않아요."
            buttonLeft={buttonLeft}
            buttonRight={buttonRight}
          />
        </ModalPortal>
      )}
    </>
  );
}
