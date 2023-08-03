import { styled } from 'styled-components';
import { headMedium3 } from '@/style/typefaces';
import { colors } from '@/style/theme';

import type { ModeButtonType } from './ModeButton';

export const HeaderModeContainer = styled.div<ModeButtonType>`
  display: flex;
  align-items: center;

  ${headMedium3}
  white-space: pre;
  color: ${(props) => (props.type === 'self' ? colors.subActiveBlue : colors.coolGreyBlack)};

  cursor: pointer;
`;

export const ModeText = styled.div`
  display: flex;
  align-items: center;
`;
