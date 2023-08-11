import { colors } from '@/style/theme';
import { bodyMedium2 } from '@/style/typefaces';
import { styled } from 'styled-components';

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

export const Item = styled.div`
  & > img {
    width: 80px;
    height: 60px;
    border-radius: 6px;
  }
`;

export const ItemDescription = styled.div`
  ${bodyMedium2};
  color: ${colors.coolGreyBlack};
  word-break: keep-all;
  max-width: 120px;
`;
