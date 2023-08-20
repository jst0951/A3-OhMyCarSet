import { hyundaiLogo } from '@/asset';
import * as S from './HeaderLogo.style';
import { useNavigate } from 'react-router-dom';
import ModalPortal from '@/components/common/modal/ModalPortal/ModalPortal';
import Modal from '@/components/common/modal/Modal/Modal';
import { useModalContext } from '@/contexts/ModalProvider';

type Props = {
  pathName: string;
};

function HeaderLogo({ pathName }: Props) {
  console.log(pathName);
  const navigate = useNavigate();
  const { open, setOpen } = useModalContext();
  const buttonLeft = {
    name: '나갈래요',
    isClose: false,
    onClick: () => handleOutClick(),
  };
  const buttonRight = {
    name: '나가지 않을래요!',
    isClose: true,
    onClick: () => handleClick(),
  };

  const handleClick = () => {
    if (pathName !== '/') {
      setOpen(true);
    }
    if (open) {
      setOpen(false);
    }
  };

  const handleOutClick = () => {
    if (open) {
      setOpen(false);
      navigate('/');
    }
  };

  return (
    <>
      <S.HeaderLogo src={hyundaiLogo} alt="현대자동차" onClick={() => handleClick()}></S.HeaderLogo>{' '}
      <ModalPortal>
        <Modal
          icon="ModalCryIcon"
          title="내 차 만들기에서 나가시겠어요?"
          description="완료까지 얼마 남지 않았어요! \n 지금 종료하면 선택사항은 저장되지 않아요."
          buttonLeft={buttonLeft}
          buttonRight={buttonRight}
        />
      </ModalPortal>
    </>
  );
}

export default HeaderLogo;
