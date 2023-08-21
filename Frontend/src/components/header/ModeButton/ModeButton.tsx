import Icon from '@/components/common/Icon';
import * as S from './ModeButton.style';
import { colors } from '@/style/theme';
import ListModal from '@/components/common/modal/ListModal/ListModal';
import ModalPortal from '@/components/common/modal/ModalPortal/ModalPortal';
import { useModalContext } from '@/contexts/ModalProvider';
import { useState } from 'react';

type modeType = 'default' | 'self' | 'guide';

export interface ModeButtonType {
  type: modeType;
}

const modeTextMap: Record<modeType, string> = {
  default: '',
  self: '  -  셀프 모드',
  guide: '  -  가이드 모드',
};

export default function ModeButton({ type }: ModeButtonType) {
  const { setOpen } = useModalContext();
  const [isList, setIsList] = useState(false);
  const modeText = modeTextMap[type];

  const handleModeClick = () => {
    if (type === 'self' || type === 'guide') {
      setOpen(true);
      setIsList(true);
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
      {isList && (
        <ModalPortal>
          <ListModal icon="ModalToolsIcon" mode={type} />
        </ModalPortal>
      )}
    </>
  );
}
