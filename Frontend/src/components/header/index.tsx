import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import ModeButton from './ModeButton/ModeButton';
import DictionaryButton from './DictionaryButton/DictionaryButton';
import CarModelButton from './CarModelButton/CarModelButton';
import Icon from '@/components/common/Icon';
import HeaderLogo from './HeaderLogo/HeaderLogo';
import { colors } from '@/style/theme';
import { useLocation } from 'react-router-dom';

export default function Header() {
  const { pathname } = useLocation();
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  const getCurrentMode = () => {
    switch (pathname) {
      case '/':
        return 'default';
      case '/self-mode':
        return 'self';
      case '/guide-mode':
        return 'guide';
      default:
        return 'default';
    }
  };

  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener('scroll', updateScroll);

    return () => {
      window.removeEventListener('scroll', updateScroll);
    };
  }, [scrollPosition]);

  return (
    <>
      <HeaderContainer $scrollPosition={scrollPosition}>
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

const HeaderContainer = styled.div<{ $scrollPosition: number }>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: ${(props) => (props.$scrollPosition < 30 ? null : colors.coolGrey001)};
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
