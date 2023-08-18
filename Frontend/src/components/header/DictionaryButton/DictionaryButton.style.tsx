import { css, styled } from 'styled-components';
import { headRegular5 } from '@/style/typefaces';
import { colors } from '@/style/theme';

export const DictionaryButtonContainer = styled.div<{ $active: boolean }>`
  display: flex;
  gap: 4px;
  align-items: center;
  margin-right: 10px;

  cursor: pointer;

  ${(props) =>
    props.$active
      ? css`
          color: ${colors.iconYellow};
          & svg {
            fill: ${colors.iconYellow};
          }
        `
      : css`
          color: ${colors.coolGreyBlack};
        `}
`;

export const DictionaryIconWrapper = styled.div`
  position: relative;
  width: 24px;
  height: 24px;
`;

export const DictionaryText = styled.div`
  ${headRegular5}
`;
