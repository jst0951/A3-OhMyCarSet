import { styled } from 'styled-components';
import { headRegular5 } from '@/style/typefaces';

export const CarModelContainer = styled.div`
  display: flex;
  gap: 2px;
  align-items: center;

  cursor: pointer;
`;

export const CarModelText = styled.div`
  margin-left: 4px;
  ${headRegular5}
`;
