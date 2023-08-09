import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import ModeButton from './ModeButton/ModeButton';
import DictionaryButton from './DictionaryButton/DictionaryButton';
import CarModelButton from './CarModelButton/CarModelButton';
import Icon from '@/components/common/Icon';
import HeaderLogo from './HeaderLogo/HeaderLogo';
import { colors } from '@/style/theme';

export default function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
  }, []);

  return (
    <>
      <HeaderContainer $scrollPosition={scrollPosition}>
        <HeaderSection>
          <HeaderLeftContainer>
            <HeaderLogo />
            <Icon icon="HeaderDividerIcon" />
            <ModeButton type="self" />
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

const HeaderContainer = styled.div<{ $scrollPosition: number }>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: ${(props) => (props.$scrollPosition < 30 ? null : colors.hyundaiGrey001)};
  transition: all 0.3s ease;
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
