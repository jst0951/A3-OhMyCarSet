import { hyundaiLogo } from '@/asset';
import * as Style from './HeaderLogo.style';

function HeaderLogo() {
  return (
    <>
      <Style.HeaderLogo src={hyundaiLogo} alt="현대자동차"></Style.HeaderLogo>
    </>
  );
}

export default HeaderLogo;
