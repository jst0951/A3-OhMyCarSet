import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import ModeButton from './ModeButton/ModeButton';
import DictionaryButton from './DictionaryButton/DictionaryButton';
import CarModelButton from './CarModelButton/CarModelButton';
import Icon from '@/components/common/Icon';
import HeaderLogo from './HeaderLogo/HeaderLogo';
import { colors } from '@/style/theme';
import { useLocation } from 'react-router-dom';
import { COMPLETE_URL, GUIDE_MODE_URL, SELF_MODE_URL } from '@/constants';

export default function Header() {
  const { pathname } = useLocation();
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  const getCurrentMode = () => {
    switch (pathname) {
      case '/':
        return 'default';
      case SELF_MODE_URL:
        return 'self';
      case GUIDE_MODE_URL:
        return 'guide';
      default:
        return 'default';
    }
  };

  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    if (pathname !== '/') return;
    window.addEventListener('scroll', updateScroll);

    return () => {
      window.removeEventListener('scroll', updateScroll);
    };
  }, [scrollPosition]);

  return (
    <>
      <HeaderContainer $isComplete={pathname === COMPLETE_URL} $scrollPosition={scrollPosition}>
        <HeaderSection>
          <HeaderLeftContainer>
            <HeaderLogo />
            <Icon icon="HeaderDividerIcon" />
            <ModeButton type={getCurrentMode()} />
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

const HeaderContainer = styled.div<{ $isComplete: boolean; $scrollPosition: number }>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100vw;

  background-color: ${(props) =>
    props.$isComplete ? `white` : props.$scrollPosition < 30 ? `transparent` : `${colors.coolGrey001}`};

  transition: all 0.3s ease;
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
