import { colors } from '@/style/theme';
import { headMedium4, bodyMedium2 } from '@/style/typefaces';
import { styled } from 'styled-components';

export const LineTitle = styled.div`
  border-bottom: 1px solid ${colors.coolGreyBlack};
  padding-bottom: 25px;
  ${headMedium4};
`;

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
  padding-left: 24px;
  padding-right: 45px;
  gap: 70px;
`;

export const ItemLine = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  width: 184px;
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

export const Item = styled.div`
  border-radius: 6px;
`;

export const ItemDescription = styled.div`
  ${bodyMedium2};
  color: ${colors.coolGreyBlack};
  word-break: keep-all;
`;

export const MoreButtonContainer = styled.div`
  margin-top: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Hyundai Sans Text Medium';
  background-color: ${colors.coolGrey001};
  color: ${colors.coolGrey004};
  width: 140px;
  height: 50px;
  border-radius: 6px;
  cursor: pointer;
`;
