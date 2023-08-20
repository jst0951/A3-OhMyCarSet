import Icon from '@/components/common/Icon';
import ModalPortal from '@/components/common/modal/ModalPortal/ModalPortal';
import Modal from '@/components/common/modal/Modal/Modal';
import { useModalContext } from '@/contexts/ModalProvider';

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
