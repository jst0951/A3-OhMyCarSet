import { colors } from '@/style/theme';
import { headMedium4, bodyRegular2 } from '@/style/typefaces';
import { styled } from 'styled-components';

export const LineTitle = styled.div`
  border-bottom: 1px solid ${colors.coolGreyBlack};
  padding-bottom: 25px;
  ${headMedium4};
`;

export const InteriorColorContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 32px;
  padding-left: 41px;
  padding-right: 37px;
  gap: 90px;
`;

export const InteriorColorItemLine = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const InteriorColorItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

export const InteriorColorItem = styled.div``;

export const InteriorColorItemDescription = styled.div`
  ${bodyRegular2};
  color: ${colors.coolGrey004};
  word-break: keep-all;
`;
