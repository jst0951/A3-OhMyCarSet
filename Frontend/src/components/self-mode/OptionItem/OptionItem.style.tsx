import { colors } from '@/style/theme';
import { bodyRegular2, headMedium2 } from '@/style/typefaces';
import { css, styled } from 'styled-components';
import { SalePercent } from './OptionHeader/OptionHeader.style';
const inactiveOptionCss = css`
  color: ${colors.coolGrey003};
`;

export const OptionName = styled.div<{ $isActive: boolean }>`
  ${headMedium2}
  color: ${colors.coolGreyBlack};

  ${({ $isActive }) => !$isActive && inactiveOptionCss}
`;

export const OptionBottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-top: 13px;
`;

export const OptionPrice = styled.div`
  ${bodyRegular2}
`;

export const ItemContainer = styled.div<{ $isActive: boolean; $isSelfMode: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  max-width: 375px;
  padding: 20px;
  border-radius: 6px;

  cursor: pointer;
  min-height: 155px;

  ${({ $isActive, $isSelfMode }) =>
    $isActive
      ? $isSelfMode
        ? css`
            // 셀프 모드 active
            border: 2px solid ${colors.mainHyundaiBlue};
            background-color: ${colors.hyundaiWhite};
            color: ${colors.mainHyundaiBlue};
          `
        : css`
            // 가이드 모드 active
            border: 2px solid ${colors.subActiveBlue};
            background-color: ${colors.hyundaiWhite};
            color: ${colors.mainHyundaiBlue};
          `
      : css`
          // active가 아닐 때
          border: 2px solid ${colors.coolGrey001};
          background-color: ${colors.coolGrey001};
          color: ${colors.coolGrey003};

          &:hover {
            border: 2px solid ${colors.coolGrey003};
            transition: all 0.3s ease-in-out;
          }
          &:hover ${SalePercent} {
            color: ${colors.mainHyundaiBlue};
            transition: all 0.3s ease-in;
          }
          &:hover ${OptionPrice} {
            color: ${colors.mainHyundaiBlue};
            transition: all 0.3s ease-in;
          }
          &:hover ${OptionName} {
            color: ${colors.coolGreyBlack};
            transition: all 0.3s ease-in;
          }
        `}

  & > svg {
    overflow: visible;
    fill: ${colors.mainHyundaiBlue};
  }
`;

export const FeedbackContainer = styled.div<{ $show: boolean }>`
  position: absolute;
  top: -1.5px;
  left: -1.5px;
  opacity: 0;

  pointer-events: none;

  ${({ $show }) =>
    $show &&
    `opacity: 1;
  transition: opacity 0.3s linear;`}
`;
