import { colors } from '@/style/theme';
import { bodyMedium2, headMedium1 } from '@/style/typefaces';
import { styled } from 'styled-components';

export const OptionFooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 375px;

  margin: 0 26px;
`;

export const OptionFooterWrapper = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-shrink: 0;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  padding: 0 7px;
  background-color: ${colors.hyundaiWhite};
  z-index: 3;
`;

export const FooterDimmed = styled.div`
  position: absolute;
  top: -70px;
  left: 0;
  width: 100%;
  height: 70px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, #ffffff 80%);

  pointer-events: none;
`;

export const TotalPriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const TotalPriceButton = styled.div<{ $show: boolean }>`
  display: flex;
  gap: 5px;
  align-items: center;
  ${bodyMedium2}
  color: ${colors.coolGrey003};

  cursor: pointer;

  & > svg {
    transition: 0.3s;

    ${({ $show }) =>
      $show &&
      `
      transform: rotate(-180deg);
  `}
  }
`;

export const TotalPrice = styled.div`
  ${headMedium1}
  color: ${colors.coolGreyBlack};
`;

export const CompleteButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 6px;
  height: 46px;
`;

export const PrevButton = styled.div<{ $disable: boolean }>`
  display: flex;
  align-items: center;
  padding: 0 10px;

  ${bodyMedium2}
  color: ${colors.coolGrey003};

  cursor: pointer;

  ${({ $disable }) =>
    $disable &&
    `
      pointer-events: none;
  `}
`;
