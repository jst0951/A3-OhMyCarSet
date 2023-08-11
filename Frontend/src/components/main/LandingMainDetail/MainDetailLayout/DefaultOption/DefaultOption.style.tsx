import { colors } from '@/style/theme';
import { bodyMedium1 } from '@/style/typefaces';
import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonLine = styled.div`
  display: flex;
  width: 772px;
  align-items: flex-start;
  margin-top: 30px;
  gap: 8px;
`;

export const OptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 32px;
`;

export const ItemLine = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  width: 256px;
  padding-left: 24px;
  gap: 41px;
`;

export const ItemContainer = styled.div<{ $more: boolean; $showMore: string }>`
  flex-direction: row;
  align-items: center;
  gap: 12px;
  ${({ $more, $showMore }) => !$more && `display: ${$showMore}`}
`;

export const MoreItemContainer = styled.div<{ $showMore: string }>`
  display: ${(props) => props.$showMore};
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

export const MoreButtonContainer = styled.div`
  margin-top: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${bodyMedium1}
  background-color: ${colors.coolGrey001};
  color: ${colors.coolGrey004};
  width: 140px;
  height: 50px;
  border-radius: 6px;
  cursor: pointer;
`;
