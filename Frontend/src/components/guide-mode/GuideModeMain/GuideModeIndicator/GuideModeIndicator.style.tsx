import { colors } from '@/style/theme';
import { styled } from 'styled-components';

export const IndicatorContainer = styled.div`
  display: inline-flex;
  align-items: flex-start;
  gap: 16px;
`;

export const Indicator = styled.div<{ $selected: boolean }>`
  display: flex;
  width: 33px;
  height: 33px;
  border-radius: 50%;
  color: ${colors.hyundaiWhite};
  align-items: center;
  justify-content: center;
  font-family: 'Hyundai Sans Text Regular';
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: -0.8px;
  ${({ $selected }) =>
    $selected ? `background-color: ${colors.mainHyundaiBlue}` : ` background-color: ${colors.coolGrey001}`};
`;
