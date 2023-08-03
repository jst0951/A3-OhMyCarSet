import { styled } from 'styled-components';
import { headMedium3 } from '@/style/typefaces';
import { colors } from '@/style/theme';

export const HeaderMode = styled.div`
  ${headMedium3}
  color: ${colors.coolGreyBlack};

  cursor: pointer;
`;
