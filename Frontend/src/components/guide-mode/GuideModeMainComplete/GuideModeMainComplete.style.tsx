import { colors } from '@/style/theme';
import { bodyRegular1, bodyRegular2, headMedium2 } from '@/style/typefaces';
import { styled } from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1024px;
  margin: 0 auto;
`;

export const MainTitle = styled.div`
  color: ${colors.hyundaiBlack};
  text-align: center;
  font-family: 'Hyundai Sans Head Medium';
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 44.8px */
  letter-spacing: -1.28px;
`;

export const SelectedTrim = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 86px;
  align-items: center;
  justify-content: center;
  margin-top: 18px;
  border-radius: 6px;
  background: #f8f8f8;
`;

export const Selected = styled.div`
  color: #737373;
  ${bodyRegular2};
`;

export const Trim = styled.div`
  color: #212121;
  ${headMedium2};
`;

export const SubTitle = styled.div`
  text-align: center;
  color: #737373;
  margin-top: 16px;
  white-space: pre-line;
  ${bodyRegular1};
`;

export const ButtonLine = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  margin-top: 38px;
`;
