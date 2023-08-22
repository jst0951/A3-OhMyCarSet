import Icon from '@/components/common/Icon';
import * as S from './ModeButton.style';
import { colors } from '@/style/theme';
import { useModalDispatch } from '@/contexts/ModalProvider';
import { useLocation } from 'react-router-dom';
import { GUIDE_MODE_URL, SELF_MODE_URL } from '@/constants';

type modeType = 'default' | 'self' | 'guide';

export interface ModeButtonType {
  type: modeType;
}

const modeTextMap: Record<modeType, string> = {
  default: '',
  self: '  -  셀프 모드',
  guide: '  -  가이드 모드',
};

export default function ModeButton() {
  const { pathname } = useLocation();
  const modalDispatch = useModalDispatch();

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
  const type = getCurrentMode();
  const modeText = modeTextMap[type];

  const handleModeClick = () => {
    if (pathname === SELF_MODE_URL || pathname === GUIDE_MODE_URL) {
      modalDispatch({ type: 'CHANGE_MODE' });
    }
  };

  return (
    <>
      <S.HeaderModeContainer onClick={handleModeClick} type={type}>
        내 차 만들기
        {modeText && (
          <S.ModeText>
            {modeText}
            <Icon icon="HeaderMoreIcon" color={type === 'guide' ? colors.subActiveBlue : undefined} />
          </S.ModeText>
        )}
      </S.HeaderModeContainer>
    </>
  );
}
