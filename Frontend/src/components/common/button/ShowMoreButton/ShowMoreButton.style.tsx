import { styled } from 'styled-components';
import { colors } from '@/style/theme';
import { bodyMedium1 } from '@/style/typefaces';

export const MoreButtonContainer = styled.div<{ $width: number }>`
  display: flex;
  gap: 2px;
  align-items: center;
  justify-content: center;
  ${bodyMedium1}
  background-color: ${colors.coolGrey001};
  color: ${colors.coolGrey004};
  width: ${({ $width }) => $width}px;
  height: 50px;
  border-radius: 6px;
  cursor: pointer;
`;
