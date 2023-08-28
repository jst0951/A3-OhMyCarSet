import { colors } from '@/style/theme';
import { bodyRegular2, bodyRegular3 } from '@/style/typefaces';
import { css, styled } from 'styled-components';

export const IconContainer = styled.div<{ $isActive: boolean; $isSelfMode: boolean }>`
  display: flex;
  gap: 8px;

  & > svg {
    fill: ${({ $isActive, $isSelfMode }) =>
      $isActive ? ($isSelfMode ? colors.mainHyundaiBlue : colors.subActiveBlue) : colors.coolGrey003};
  }
`;

export const TagContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export const Tag = styled.div<{ $isActive: boolean }>`
  display: inline-flex;
  padding: 4px 8px;

  border-radius: 2px;

  ${bodyRegular3}

  ${({ $isActive }) =>
    $isActive
      ? css`
          color: ${colors.mainHyundaiBlue};
          background-color: ${colors.tagSkyBlue};
        `
      : css`
          color: ${colors.coolGrey003};
          background-color: #e6f0ff;
        `}
`;

export const SalePercent = styled.div<{ $isActive: boolean; $isSelfMode: boolean }>`
  margin: 10px 0 4px;
  ${bodyRegular2}
  line-height: 16px;

  ${({ $isActive, $isSelfMode }) =>
    $isActive
      ? $isSelfMode
        ? css`
            color: ${colors.mainHyundaiBlue};
          `
        : css`
            color: ${colors.subActiveBlue};
          `
      : css`
          color: ${colors.coolGrey003};
        `};
`;
