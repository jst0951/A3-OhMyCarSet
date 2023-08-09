import { colors } from '@/style/theme';
import { bodyRegular2, headMedium2 } from '@/style/typefaces';
import { styled } from 'styled-components';

export const TrimCardListContainer = styled.div`
  position: absolute;
  top: -153px;
  display: flex;
  gap: 16px;
`;

export const TrimCardContainer = styled.div`
  position: relative;
  width: 192px;
  height: 123px;
  padding: 20px 14px 20px 20px;

  border-radius: 6px;
  background-color: white;
  /* backdrop-filter: blur(12px); */

  color: ${colors.coolGreyBlack};

  transition: all 0.1s;

  cursor: pointer;

  &:hover {
    color: white;
    background-color: ${colors.mainHyundaiBlue};

    svg {
      fill: white;
    }
  }
`;

export const TrimDescription = styled.div`
  margin-bottom: 8px;
  ${bodyRegular2}
`;

export const TrimName = styled.div`
  margin-bottom: 17px;
  ${headMedium2}
`;

export const TrimPriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TrimPrice = styled.div`
  ${bodyRegular2}
`;

export const TrimDescriptionWrapper = styled.div<{ $id: number }>`
  position: absolute;
  top: -253px;

  left: ${({ $id }) => ($id === 1 ? '0' : '-210px')};
`;
