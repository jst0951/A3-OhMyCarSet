// import React from 'react';
import { styled } from 'styled-components';
import { ReactComponent as CarIcon } from '../../asset/icons/header_car_icon.svg';
import { ReactComponent as MoreIcon } from '../../asset/icons/more_icon.svg';
import { headRegular5 } from '../../style/typefaces';

const CarModelButton = () => {
  return (
    <CarModelContainer>
      <CarIcon />
      <CarModelText>펠리세이드</CarModelText>
      <MoreIcon />
    </CarModelContainer>
  );
};

export default CarModelButton;

const CarModelContainer = styled.div`
  display: flex;
  gap: 2px;
  align-items: center;

  cursor: pointer;
`;

const CarModelText = styled.div`
  margin-left: 4px;
  ${headRegular5}
`;
