import { styled } from 'styled-components';
import { colors } from '@/style/theme';
import { bodyRegular3 } from '@/style/typefaces';

export const CoreOptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 18px;
`;

export const CoreOptionItemLine = styled.div`
  display: flex;
  flex-direction: column;
  width: 256px;
  padding-left: 40px;
`;

export const CoreOptionItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;

export const CoreOptionItemImg = styled.div`
  width: 60px;
  height: 60px;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const CoreOptionItemDescription = styled.div`
  ${bodyRegular3};
  color: ${colors.coolGrey004};
  max-width: 96px;
  word-break: keep-all;
`;
