import { colors } from '@/style/theme';
import { bodyRegular2, bodyRegular3 } from '@/style/typefaces';
import { styled } from 'styled-components';

export const IconContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export const TagContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export const Tag = styled.div`
  display: inline-flex;
  padding: 4px 8px;

  border-radius: 2px;
  background-color: ${colors.tagSkyBlue};

  ${bodyRegular3}
  color: ${colors.mainHyundaiBlue};
`;

export const SalePercent = styled.div<{ $isActive: boolean }>`
  margin: 10px 0 4px;
  ${bodyRegular2}
  line-height: 16px;
  color: ${({ $isActive }) => ($isActive ? colors.mainHyundaiBlue : colors.coolGrey003)};
`;
