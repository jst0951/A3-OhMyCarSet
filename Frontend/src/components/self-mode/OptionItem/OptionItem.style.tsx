import { colors } from '@/style/theme';
import { bodyMedium3, bodyRegular2, headMedium2 } from '@/style/typefaces';
import { css, styled } from 'styled-components';

const inactiveOptionCss = css`
  color: ${colors.coolGrey003};
`;

export const OptionItemContainer = styled.div<{ $isActive: boolean; $showMore: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  max-width: 375px;
  padding: 20px;
  border-radius: 6px;
  border: 2px solid ${colors.mainHyundaiBlue};
  background-color: ${colors.hyundaiWhite};
  color: ${colors.mainHyundaiBlue};

  cursor: pointer;
  height: 155px;
  transition: height 2s ease;

  ${({ $isActive }) =>
    !$isActive &&
    `
      border: 2px solid ${colors.coolGrey001};
      background-color: ${colors.coolGrey001};
      color: ${colors.coolGrey003}
  `}

  ${({ $showMore }) =>
    $showMore
      ? `
     height: calc(100% - 30px);
     transition: height 0.5s linear;
     animation: show-item 0.5s linear forwards;

  `
      : `
    transition: height 0.3s linear;
    overflow: hidden;
  `}

  & > svg {
    overflow: visible;
  }

  @keyframes show-item {
    from {
      overflow: hidden;
    }
    to {
      overflow: visible;
    }
  }
  @keyframes hide-item {
    from {
      overflow: visible;
    }
    to {
      overflow: hidden;
    }
  }
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
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 13px 20px 20px;
  border-radius: 6px;
  background-color: ${({ $isActive }) => ($isActive ? colors.hyundaiWhite : colors.coolGrey001)};
  color: ${({ $isActive }) => ($isActive ? colors.mainHyundaiBlue : colors.coolGrey003)};
`;

export const OptionPrice = styled.div`
  ${bodyRegular2}
`;

export const ShowMoreButton = styled.div<{ $isActive: boolean; $showMore: boolean }>`
  display: flex;
  align-items: center;
  gap: 2px;

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
