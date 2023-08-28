import Icon from '@/components/common/Icon';
import * as S from './CarModelButton.style';
import { useModalDispatch } from '@/contexts/ModalProvider';
import { useLocation } from 'react-router-dom';

export default function CarModelButton() {
  const { pathname } = useLocation();
  const modalDispatch = useModalDispatch();

  const handleClick = () => {
    if (pathname === '/') return;
    modalDispatch({ type: 'CHANGE_MODEL' });
  };

  return (
    <>
      <S.CarModelContainer onClick={() => handleClick()}>
        <Icon icon="HeaderCarIcon" />
        <S.CarModelText>팰리세이드</S.CarModelText>
        <Icon icon="HeaderMoreIcon" />
      </S.CarModelContainer>
    </>
  );
}
