import { hyundaiLogo } from '@/asset';
import * as S from './HeaderLogo.style';
import { useNavigate } from 'react-router-dom';

function HeaderLogo() {
  const navigate = useNavigate();
  return (
    <>
      <S.HeaderLogo src={hyundaiLogo} alt="현대자동차" onClick={() => navigate('/')}></S.HeaderLogo>
    </>
  );
}

export default HeaderLogo;
