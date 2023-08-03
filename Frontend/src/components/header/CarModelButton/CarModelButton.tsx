// import React from 'react';
import { ReactComponent as CarIcon } from '../../../asset/icons/header_car_icon.svg';
import { ReactComponent as MoreIcon } from '../../../asset/icons/more_icon.svg';

import * as Style from './CarModelButton.style';

export default function CarModelButton() {
  return (
    <Style.CarModelContainer>
      <CarIcon />
      <Style.CarModelText>펠리세이드</Style.CarModelText>
      <MoreIcon />
    </Style.CarModelContainer>
  );
}
