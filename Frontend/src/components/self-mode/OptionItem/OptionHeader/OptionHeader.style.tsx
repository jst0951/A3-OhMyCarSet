import { colors } from '@/style/theme';
import { bodyRegular2 } from '@/style/typefaces';
import { styled } from 'styled-components';

export const Container = styled.div``;

export const SalePercent = styled.div<{ $isActive: boolean }>`
  margin: 10px 0 4px;
  ${bodyRegular2}
  line-height: 16px;
  color: ${({ $isActive }) => ($isActive ? colors.mainHyundaiBlue : colors.coolGrey003)};
`;
