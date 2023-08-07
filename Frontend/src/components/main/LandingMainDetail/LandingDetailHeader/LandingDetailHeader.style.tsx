import { styled } from 'styled-components';
import { colors } from '@/style/theme';

export const MainHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: sticky;
  top: 84px;
  left: 0;
  z-index: 100;
  width: 100vw;
  height: 335px;
  background-color: ${colors.hyundaiGrey001};
`;

export const MainHeaderTitle = styled.div`
  color: ${colors.hyundaiBlack};
  text-align: center;
  font-family: 'Hyundai Sans Head Medium';
  font-size: 40px;
  font-style: normal;
  font-weight: 500;
  line-height: 52px;
  letter-spacing: -1.6px;
  margin-top: 65px;
`;

export const MainHeaderTrimContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 118px;
  gap: 106px;
`;
