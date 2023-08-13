import { colors } from '@/style/theme';
import { headRegular4 } from '@/style/typefaces';
import { styled } from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1024px;
  margin: 0 auto;
`;

export const GuideText = styled.div`
  width: 294px;
  height: 96px;
  margin-top: 64px;
  color: #212121;
  text-align: center;
  font-family: 'Hyundai Sans Head Medium';
  font-size: 34px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 47.6px */
  letter-spacing: -1.36px;
`;

export const CarImg = styled.div``;

export const InternalExternal = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 13px;
`;

export const External = styled.div<{ $isExternal: boolean }>`
  display: flex;
  padding: 8px 32px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  ${headRegular4}
  ${({ $isExternal }) =>
    $isExternal
      ? `color:${colors.hyundaiWhite};
  background-color:${colors.mainHyundaiBlue};`
      : `colors:${colors.mainHyundaiBlue};
  background-color:${colors.hyundaiGrey002}`}
`;

export const Internal = styled.div<{ $isExternal: boolean }>`
  display: flex;
  padding: 8px 32px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  ${headRegular4}
  ${({ $isExternal }) =>
    !$isExternal
      ? `color:${colors.hyundaiWhite};
  background-color:${colors.mainHyundaiBlue};`
      : `colors:${colors.mainHyundaiBlue};
  background-color:${colors.hyundaiGrey002}`}
`;

export const SummaryContainer = styled.div``;

export const ButtonLine = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 80px;
`;

export const DetailContainer = styled.div``;
