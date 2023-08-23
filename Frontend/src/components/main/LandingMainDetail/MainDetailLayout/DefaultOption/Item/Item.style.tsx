import { colors } from '@/style/theme';
import { bodyMedium2, bodyMedium3 } from '@/style/typefaces';
import { styled } from 'styled-components';

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 12px;
`;

export const Dimmed = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 80px;
  height: 60px;

  border-radius: 6px;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);

  ${bodyMedium3}
  color: ${colors.hyundaiWhite};
  text-align: center;

  opacity: 0;
  transition: opacity 0.1s ease-in-out;

  cursor: pointer;
`;

export const Item = styled.div`
  position: relative;
  & > img {
    width: 80px;
    height: 60px;
    border-radius: 6px;
    cursor: pointer;
  }
  &:hover ${Dimmed} {
    opacity: 1;
    transition: opacity 0.1s ease;
  }
`;

export const ItemDescription = styled.div`
  ${bodyMedium2};
  color: ${colors.coolGreyBlack};
  word-break: keep-all;
  display: flex;
  align-items: center;
  height: 100px;
  overflow: auto;
  max-width: 120px;
`;
