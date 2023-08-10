import { colors } from '@/style/theme';
import { bodyMedium2 } from '@/style/typefaces';
import { styled } from 'styled-components';

export const InteriorColorContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 32px;
`;

export const InteriorColorItemLine = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 256px;
  padding-left: 24px;
`;

export const InteriorColorItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

export const InteriorColorItem = styled.div`
  width: 100px;
  height: 35px;
  border-radius: 8px;

  & > img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }
`;

export const InteriorColorItemDescription = styled.div`
  width: 120px;
  ${bodyMedium2};
  color: ${colors.coolGreyBlack};
  word-break: keep-all;
`;
