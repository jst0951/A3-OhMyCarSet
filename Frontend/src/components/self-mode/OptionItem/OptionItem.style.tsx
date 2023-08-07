import { colors } from '@/style/theme';
import { bodyMedium3, bodyRegular2, headMedium2 } from '@/style/typefaces';
import { css, styled } from 'styled-components';

const inactiveOptionCss = css`
  color: ${colors.coolGrey003};
`;

export const OptionItemContainer = styled.div<{ $isActive: boolean }>`
  display: flex;
  flex-direction: column;
  max-width: 375px;
  padding: 20px;
  border-radius: 6px;
  border: 2px solid ${colors.mainHyundaiBlue};
  background-color: ${colors.hyundaiWhite};
  color: ${colors.mainHyundaiBlue};

  cursor: pointer;

  ${({ $isActive }) =>
    !$isActive &&
    `
      border: 2px solid ${colors.coolGrey001};
      background-color: ${colors.coolGrey001};
      color: ${colors.coolGrey003}
  `}
`;

export const SalePercent = styled.div`
  margin: 10px 0 4px;
  ${bodyRegular2}
  line-height: 16px;
`;

export const OptionName = styled.div<{ $isActive: boolean }>`
  ${headMedium2}
  color: ${colors.coolGreyBlack};

  ${({ $isActive }) => !$isActive && inactiveOptionCss}
`;

export const OptionBottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 13px;
`;

export const OptionPrice = styled.div`
  ${bodyRegular2}
`;

export const ShowMoreButton = styled.div<{ $showMore: boolean }>`
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
`;
