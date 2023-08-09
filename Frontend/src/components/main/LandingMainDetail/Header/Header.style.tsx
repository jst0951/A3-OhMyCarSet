import { styled } from 'styled-components';
import { colors } from '@/style/theme';

export const TitleContainer = styled.div`
  width: 100vw;
  background-color: ${colors.hyundaiGrey001};
`;

export const Title = styled.div`
  color: ${colors.hyundaiBlack};
  text-align: center;
  font-family: 'Hyundai Sans Head Medium';
  font-size: 40px;
  font-style: normal;
  font-weight: 500;
  line-height: 52px;
  letter-spacing: -1.6px;
  padding-top: 65px;
  padding-bottom: 60px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: sticky;
  top: 84px;
  left: 0;
  z-index: 100;
  width: 100vw;
  height: 158px;
  background-color: ${colors.hyundaiGrey001};
`;

export const TrimContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 58px;
  gap: 130px;
`;
