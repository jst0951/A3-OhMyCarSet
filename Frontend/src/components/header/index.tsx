import { styled } from 'styled-components';
import { ReactComponent as HeaderDivider } from '../../asset/icons/header_divider.svg';
import { hyundaiLogo } from '../../asset';
import ModeButton from './ModeButton/ModeButton';
import DictionaryButton from './DictionaryButton/DictionaryButton';
import CarModelButton from './CarModelButton/CarModelButton';

export default function Header() {
  return (
    <>
      <HeaderContainer>
        <HeaderSection>
          <HeaderLeftContainer>
            <HeaderLogo src={hyundaiLogo} alt="현대자동차"></HeaderLogo>
            <HeaderDivider />
            <ModeButton />
          </HeaderLeftContainer>
          <HeaderRightContainer>
            <DictionaryButton />
            <HeaderDivider />
            <CarModelButton />
          </HeaderRightContainer>
        </HeaderSection>
      </HeaderContainer>
    </>
  );
}

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  width: 100vw;
`;

const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1280px;
  margin: 0 auto;
  padding: 30px 128px;
`;

const HeaderLeftContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const HeaderLogo = styled.img`
  width: 149px;
  height: 21px;
`;

const HeaderRightContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;
