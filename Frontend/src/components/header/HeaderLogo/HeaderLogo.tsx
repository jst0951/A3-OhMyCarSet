import { hyundaiLogo } from '@/asset';
import * as S from './HeaderLogo.style';
import { useModalDispatch } from '@/contexts/ModalProvider';
import { useLocation } from 'react-router-dom';

function HeaderLogo() {
  const { pathname } = useLocation();
  const modalDispatch = useModalDispatch();

  const handleClick = () => {
    if (pathname === '/') return;
    modalDispatch({ type: 'GO_MAIN' });
  };

  return (
    <>
      <S.HeaderLogo src={hyundaiLogo} alt="현대자동차" onClick={handleClick}></S.HeaderLogo>
    </>
  );
}

export default HeaderLogo;
