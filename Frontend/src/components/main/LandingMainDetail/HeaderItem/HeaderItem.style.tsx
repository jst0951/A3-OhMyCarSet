import { styled } from 'styled-components';
import { bodyRegular2 } from '@/style/typefaces';
import { colors } from '@/style/theme';

export const HeaderTrimContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const HeaderItemName = styled.div`
  color: ${colors.coolGreyBlack};
  font-family: 'Hyundai Sans Head Medium';
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: -0.84px;
`;

export const HeaderItemDescription = styled.div`
  ${bodyRegular2};
`;

export const HeaderItemBest = styled.div`
  color: #ff4d4d;
  font-family: 'Hyundai Sans Head Medium';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 15px;
  letter-spacing: -0.42px;
  margin-top: -26px;
  margin-bottom: 8px;
`;
