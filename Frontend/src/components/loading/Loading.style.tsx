import { colors } from '@/style/theme';
import { styled } from 'styled-components';

export const LoadingIndicator = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: calc(100vh - 110px);
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 190px;
  height: 500px;
  margin: auto;
`;

export const LoadingText = styled.div`
  padding: 40px 0;
  font-family: 'Hyundai Sans Head KR';
  font-size: 24px;
  font-weight: 500;
  line-height: 31.2px;
  letter-spacing: -0.96px;
  color: ${colors.coolGreyBlack};
  text-align: center;
`;
