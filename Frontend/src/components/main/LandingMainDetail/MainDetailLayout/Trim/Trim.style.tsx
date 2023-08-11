import { colors } from '@/style/theme';
import { bodyMedium1 } from '@/style/typefaces';
import { styled } from 'styled-components';

export const TrimContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 256px;
  padding-top: 50px;
`;

export const TrimPrice = styled.div`
  margin-bottom: 56px;
  ${bodyMedium1}
  color: ${colors.coolGreyBlack};
`;

export const TrimImgContainer = styled.div``;
