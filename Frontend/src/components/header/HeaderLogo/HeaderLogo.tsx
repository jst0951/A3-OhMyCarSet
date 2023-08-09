import { hyundaiLogo } from '@/asset';
import * as Style from './HeaderLogo.style';
import { useNavigate } from 'react-router-dom';

function HeaderLogo() {
  const navigate = useNavigate();
  return (
    <>
      <Style.HeaderLogo src={hyundaiLogo} alt="현대자동차" onClick={() => navigate('/')}></Style.HeaderLogo>
    </>
  );
}

export default HeaderLogo;
