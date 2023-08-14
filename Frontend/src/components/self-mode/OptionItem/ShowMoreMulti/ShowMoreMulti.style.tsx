import { colors } from '@/style/theme';
import { bodyMedium3, bodyRegular3 } from '@/style/typefaces';
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
  width: 100%;
  margin-top: 10px;
  padding-bottom: 13px;
`;

export const NameContainer = styled.div`
  width: 100%;
  padding: 12px 0 8px;
  border-top: 1px solid ${colors.coolGrey001};
`;

export const ShowMoreMainText = styled.span`
  ${bodyRegular3}
  color: ${colors.coolGrey003};

  word-break: keep-all;
`;

export const Name = styled.span<{ $selected: boolean }>`
  line-height: 21.5px;
  ${({ $selected }) =>
    $selected &&
    `
  ${bodyMedium3}
  line-height: 21.5px;
  color: ${colors.coolGreyBlack};
`}
`;

export const ShowMoreSubText = styled.div`
  ${bodyRegular3}
  color: ${colors.coolGreyBlack};
  line-height: 17px;
`;
