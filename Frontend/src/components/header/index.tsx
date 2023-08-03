import { styled } from 'styled-components';
import ModeButton from './ModeButton/ModeButton';
import DictionaryButton from './DictionaryButton/DictionaryButton';
import CarModelButton from './CarModelButton/CarModelButton';
import Icon from '@/components/common/Icon';
import HeaderLogo from './HeaderLogo/HeaderLogo';

export default function Header() {
  return (
    <>
      <HeaderContainer>
        <HeaderSection>
          <HeaderLeftContainer>
            <HeaderLogo />
            <Icon icon="HeaderDividerIcon" />
            <ModeButton type="default" />
          </HeaderLeftContainer>
          <HeaderRightContainer>
            <DictionaryButton />
            <Icon icon="HeaderDividerIcon" />
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
  gap: 8px;
  align-items: center;
`;

const HeaderRightContainer = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;
