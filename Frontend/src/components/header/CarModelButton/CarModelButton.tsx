import Icon from '@/components/common/Icon';

import * as Style from './CarModelButton.style';

export default function CarModelButton() {
  return (
    <Style.CarModelContainer>
      <Icon icon="HeaderCarIcon" />
      <Style.CarModelText>펠리세이드</Style.CarModelText>
      <Icon icon="HeaderMoreIcon" />
    </Style.CarModelContainer>
  );
}
