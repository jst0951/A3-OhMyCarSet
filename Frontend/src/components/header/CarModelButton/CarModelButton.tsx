import Icon from '@/components/common/Icon';

import * as S from './CarModelButton.style';

export default function CarModelButton() {
  return (
    <S.CarModelContainer>
      <Icon icon="HeaderCarIcon" />
      <S.CarModelText>펠리세이드</S.CarModelText>
      <Icon icon="HeaderMoreIcon" />
    </S.CarModelContainer>
  );
}
