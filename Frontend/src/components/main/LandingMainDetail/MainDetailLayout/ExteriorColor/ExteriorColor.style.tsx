import { colors } from '@/style/theme';
import { bodyMedium2 } from '@/style/typefaces';
import { styled } from 'styled-components';

export const ExteriorColorContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  padding-left: 41px;
  padding-right: 37px;
  gap: 90px;
`;

export const ExteriorColorItemLine = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ExteriorColorItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
`;

export const ExteriorColorItem = styled.div<{ $bgColor: string; $border: boolean }>`
  border-radius: 50%;
  background-color: ${(props) => props.$bgColor};
  width: 20px;
  height: 20px;

  ${({ $border }) => $border && `border: 1px solid ${colors.coolGrey002};`}
`;

export const ExteriorColorItemDescription = styled.div`
  ${bodyMedium2};
  color: ${colors.coolGreyBlack};
`;
