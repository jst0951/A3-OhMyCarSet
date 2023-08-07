import { colors } from '@/style/theme';
import { bodyMedium3, bodyRegular2, headMedium2 } from '@/style/typefaces';
import { styled } from 'styled-components';

export const OptionItemContainer = styled.div<{ $isActive: boolean }>`
  max-width: 375px;
  padding: 20px;
  border-radius: 6px;
  border: 2px solid ${colors.mainHyundaiBlue};
  background-color: ${colors.hyundaiWhite};
`;

export const SalePercent = styled.div`
  margin: 10px 0 4px;
  ${bodyRegular2}
  color: ${colors.mainHyundaiBlue};
`;

export const OptionName = styled.div`
  margin-bottom: 13px;
  ${headMedium2}
  color: ${colors.coolGreyBlack};
`;

export const OptionBottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const OptionPrice = styled.div`
  ${bodyRegular2}
  color: ${colors.mainHyundaiBlue};
`;

export const ShowMoreButton = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;

  ${bodyMedium3}
  color: ${colors.coolGrey003};

  cursor: pointer;
`;
