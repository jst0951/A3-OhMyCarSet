import Icon from '@/components/common/Icon';
import * as S from './ModeButton.style';
import { colors } from '@/style/theme';

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
  const modeText = modeTextMap[type];

  return (
    <>
      <S.HeaderModeContainer type={type}>
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
