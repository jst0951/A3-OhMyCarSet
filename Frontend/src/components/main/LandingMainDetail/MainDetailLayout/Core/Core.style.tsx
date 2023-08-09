import { styled } from 'styled-components';
import { colors } from '@/style/theme';
import { headMedium4, bodyRegular3 } from '@/style/typefaces';

export const LineTitle = styled.div`
  border-bottom: 1px solid ${colors.coolGreyBlack};
  padding-bottom: 25px;
  ${headMedium4};
`;

export const CoreOptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 32px;
  margin-left: 22px;
  margin-right: 22px;
  gap: 96px;
`;

export const CoreOptionItemLine = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CoreOptionItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 22px;
`;

export const CoreOptionItemImg = styled.div`
  max-width: 60px;
`;

export const CoreOptionItemDescription = styled.div`
  ${bodyRegular3};
  color: ${colors.coolGrey004};
  max-width: 96px;
  word-break: keep-all;
`;
