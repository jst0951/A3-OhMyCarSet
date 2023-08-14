import { colors } from '@/style/theme';
import { bodyMedium3, bodyRegular2, headMedium2 } from '@/style/typefaces';
import { css, styled } from 'styled-components';

const inactiveOptionCss = css`
  color: ${colors.coolGrey003};
`;

export const SalePercent = styled.div<{ $isActive: boolean }>`
  margin: 10px 0 4px;
  ${bodyRegular2}
  line-height: 16px;
  color: ${({ $isActive }) => ($isActive ? colors.mainHyundaiBlue : colors.coolGrey003)};
`;

export const OptionName = styled.div<{ $isActive: boolean }>`
  ${headMedium2}
  color: ${colors.coolGreyBlack};

  ${({ $isActive }) => !$isActive && inactiveOptionCss}
`;

export const OptionBottomContainer = styled.div<{ $isActive: boolean }>`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-top: 13px;
  /* background-color: ${({ $isActive }) => ($isActive ? colors.hyundaiWhite : colors.coolGrey001)}; */
  color: ${({ $isActive }) => ($isActive ? colors.mainHyundaiBlue : colors.coolGrey003)};
`;

export const OptionPrice = styled.div`
  ${bodyRegular2}
`;

export const ShowMoreButton = styled.div<{ $isActive: boolean; $showMore: boolean }>`
  display: flex;
  align-items: center;
  gap: 2px;
  /* z-index: 1; */

  ${bodyMedium3}
  color: ${colors.coolGrey003};

  cursor: pointer;

  & > svg {
    transition: 0.2s ease-in-out;

    ${({ $showMore }) =>
      $showMore &&
      `
      transform: scaleY(-1);
  `}
  }

  ${({ $isActive }) => !$isActive && `pointer-events: none`}
`;

export const ItemContainer = styled.div<{ $isActive: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  max-width: 375px;
  padding: 20px;
  border-radius: 6px;

  cursor: pointer;
  min-height: 155px;

  ${({ $isActive }) =>
    !$isActive
      ? `
      border: 2px solid ${colors.coolGrey001};
      background-color: ${colors.coolGrey001};
      color: ${colors.coolGrey003};

      

      &:hover {
        border: 2px solid ${colors.coolGrey003};
        transition: all 0.3s ease-in-out;
      }
      &:hover ${SalePercent}, &:hover ${OptionPrice} {
        color: ${colors.mainHyundaiBlue};
        transition: all 0.3s ease-in;
      }
      &:hover ${OptionName} {
        color: ${colors.coolGreyBlack};
        transition: all 0.3s ease-in;
      }
  `
      : `
  border: 2px solid ${colors.mainHyundaiBlue};
  background-color: ${colors.hyundaiWhite};
  color: ${colors.mainHyundaiBlue};
  `}

  & > svg {
    overflow: visible;
    fill: ${colors.mainHyundaiBlue};
  }
`;

export const FeedbackContainer = styled.div<{ $show: boolean }>`
  position: absolute;
  top: -1px;
  left: -1px;
  opacity: 0;

  pointer-events: none;

  ${({ $show }) =>
    $show &&
    `opacity: 1;
  transition: opacity 0.3s linear;`}
`;
