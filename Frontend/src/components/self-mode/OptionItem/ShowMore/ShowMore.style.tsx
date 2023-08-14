import { colors } from '@/style/theme';
import { bodyRegular3 } from '@/style/typefaces';
import { styled } from 'styled-components';

export const ShowMoreWrapper = styled.div<{ $showMore: boolean }>`
  position: relative;
  height: 0;
  overflow: hidden;
  opacity: ${({ $showMore }) => ($showMore ? 1 : 0)};
  transition:
    height 0.5s,
    opacity 0.5s;
`;

export const ShowMoreContainer = styled.div`
  position: absolute;
  margin-top: 10px;
  padding-bottom: 13px;
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
  /* margin-bottom: 13px; */
  border-radius: 6px;
  background-color: #f3f3f3;

  ${bodyRegular3}
  color: #4b4b4b;
  line-height: 20px;
  white-space: pre-line;
`;
