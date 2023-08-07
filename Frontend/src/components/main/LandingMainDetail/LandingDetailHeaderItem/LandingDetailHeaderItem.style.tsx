import { styled } from 'styled-components';
import { bodyRegular2 } from '@/style/typefaces';
import { colors } from '@/style/theme';

export const MainHeaderTrimContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainHeaderItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const MainHeaderItemName = styled.div`
  color: ${colors.coolGreyBlack};
  font-family: 'Hyundai Sans Head Medium';
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.84px;
`;

export const MainHeaderItemDescription = styled.div`
  ${bodyRegular2};
`;

export const MainHeaderItemBest = styled.div`
  color: #ff4d4d;
  font-family: 'Hyundai Sans Head Medium';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.42px;
  margin-top: -26px;
  margin-bottom: 8px;
`;
