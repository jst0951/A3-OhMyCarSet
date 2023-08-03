import { css, styled } from 'styled-components';
import { headRegular5 } from '@/style/typefaces';
import { colors } from '@/style/theme';

export const DictionaryButtonContainer = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  margin-right: 10px;

  cursor: pointer;
`;

export const DictionaryIconWrapper = styled.div`
  position: relative;
  width: 24px;
  height: 24px;

  > svg {
    position: absolute;
    bottom: 0;
  }
`;

export const DictionaryText = styled.div<{ $active: boolean }>`
  ${headRegular5}
  ${(props) =>
    props.$active
      ? css`
          color: ${colors.iconYellow};
        `
      : css`
          color: ${colors.coolGreyBlack};
        `}
`;
