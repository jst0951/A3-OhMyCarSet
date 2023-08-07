import { styled } from 'styled-components';
import { colors } from '@/style/theme';
import { headMedium4 } from '@/style/typefaces';

export const MainDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
`;

export const MainDetailTrim = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100vw;
  gap: 46px;
`;

export const MainDetailOptionContainer = styled.div`
  width: 80vw;
  height: 2094px;
  margin-left: 10vw;
`;

export const MainDetailLineTitle = styled.div`
  border-bottom: 1px solid ${colors.coolGreyBlack};
  padding-bottom: 25px;
  ${headMedium4};
`;
