import { colors } from '@/style/theme';
import { styled } from 'styled-components';

export const CarDictBoxContainer = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  padding: 7px 8px 6px;
  border-radius: 6px;
  background-color: ${colors.iconYellow};

  cursor: pointer;
`;

export const DictIcon = styled.div`
  position: relative;
  width: 22px;
  height: 22px;

  & > svg {
    position: absolute;
    bottom: 0;
  }
`;
