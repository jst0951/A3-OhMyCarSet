// import React from 'react';
import { styled } from 'styled-components';
import { headMedium3 } from '../../style/typefaces';
import { colors } from '../../style/theme';

const ModeButton = () => {
  return (
    <div>
      <HeaderMode>내 차 만들기</HeaderMode>
    </div>
  );
};

export default ModeButton;

const HeaderMode = styled.div`
  ${headMedium3}
  color: ${colors.coolGreyBlack};

  cursor: pointer;
`;
