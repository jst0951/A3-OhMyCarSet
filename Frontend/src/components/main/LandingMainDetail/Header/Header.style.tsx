import { styled } from 'styled-components';
import { colors } from '@/style/theme';

export const TitleContainer = styled.div`
  width: 100vw;
  background-color: ${colors.coolGrey001};
`;

export const Title = styled.div`
  color: ${colors.coolGreyBlack};
  text-align: center;
  font-family: 'Hyundai Sans Head Medium';
  font-size: 40px;
  font-style: normal;
  font-weight: 500;
  line-height: 52px;
  letter-spacing: -1.6px;
  padding: 65px 0 86px;
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
  background-color: ${colors.coolGrey001};
`;

export const TrimContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 31px 0 39px;
  /* gap: 130px; */
`;
