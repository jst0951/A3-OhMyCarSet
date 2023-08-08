import { colors } from '@/style/theme';
import { bodyRegular3 } from '@/style/typefaces';
import { styled } from 'styled-components';

export const OptionShowMoreContainer = styled.div`
  margin-top: 10px;
`;

export const ShowMoreMainText = styled.div`
  padding: 12px 0 17px;
  border-top: 1px solid ${colors.coolGrey001};

  ${bodyRegular3}
  line-height: 16.8px;
  color: ${colors.coolGreyBlack};

  word-break: keep-all;
`;

export const ShowMoreSubText = styled.div`
  padding: 12px;
  margin-bottom: 13px;
  border-radius: 6px;
  background-color: #f3f3f3;

  ${bodyRegular3}
  color: #4b4b4b;
  line-height: 20px;
  white-space: pre-line;
`;
