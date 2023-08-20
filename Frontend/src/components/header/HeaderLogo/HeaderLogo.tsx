import { hyundaiLogo } from '@/asset';
import * as S from './HeaderLogo.style';
import { useNavigate } from 'react-router-dom';
import ModalPortal from '@/components/common/modal/ModalPortal/ModalPortal';
import Modal from '@/components/common/modal/Modal/Modal';
import { useModalContext } from '@/contexts/ModalProvider';
import { useState } from 'react';

type Props = {
  pathName: string;
};

function HeaderLogo({ pathName }: Props) {
  const navigate = useNavigate();
  const [isLogo, setIsLogo] = useState(false);
  const { open, setOpen } = useModalContext();
  const buttonLeft = {
    name: '나갈래요',
    onClick: () => handleOutClick(),
  };
  const buttonRight = {
    name: '나가지 않을래요!',
    onClick: () => handleClick(),
  };

  const handleClick = () => {
    if (pathName !== '/') {
      setOpen(true);
      setIsLogo(true);
    }
    if (open) {
      setOpen(false);
      setIsLogo(false);
    }
  };

  const handleOutClick = () => {
    if (open) {
      setOpen(false);
      setIsLogo(false);
      navigate('/');
    }
  };

  return (
    <>
      <S.HeaderLogo src={hyundaiLogo} alt="현대자동차" onClick={() => handleClick()}></S.HeaderLogo>{' '}
      {isLogo && (
        <ModalPortal>
          <Modal
            icon="ModalCryIcon"
            title="내 차 만들기에서 나가시겠어요?"
            description="완료까지 얼마 남지 않았어요! \n 지금 종료하면 선택사항은 저장되지 않아요."
            buttonLeft={buttonLeft}
            buttonRight={buttonRight}
          />
        </ModalPortal>
      )}
    </>
  );
}

export default HeaderLogo;
