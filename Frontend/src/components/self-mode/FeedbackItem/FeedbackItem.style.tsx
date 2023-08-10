import { colors } from '@/style/theme';
import { bodyRegular3, headMedium2 } from '@/style/typefaces';
import { styled } from 'styled-components';

export const FeedbackContainer = styled.div`
  max-width: 375px;
  min-height: 155px;
  padding: 20px;

  color: ${colors.hyundaiWhite};

  border-radius: 6px;
  border: 2px solid ${colors.mainHyundaiBlue};
  background-color: ${colors.mainHyundaiBlue};
`;

export const Title = styled.div`
  margin: 14px 0 8px;
  ${headMedium2}
  color: ${colors.hyundaiWhite};
`;

export const Description = styled.div`
  ${bodyRegular3}
  color: ${colors.hyundaiWhite};
  line-height: 16px;
  word-break: keep-all;
`;
