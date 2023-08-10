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
  display: flex;
  gap: 4px;
  ${headMedium1}
  color: ${colors.coolGreyBlack};
`;

export const Price = styled.div`
  width: 118px;
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

export const EstimateContainer = styled.div<{ $show: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  /* max-width: 375px;
  min-height: 468px; */
  width: 375px;
  height: calc(100vh - 252px);
  /* margin: 0 7px; */
  border-radius: 6px;
  border: 2px solid ${colors.coolGrey001};
  background-color: ${colors.hyundaiWhite};
  box-shadow: 0px 4px 14px 0px rgba(104, 104, 104, 0.1);

  /* opacity: 0; */

  pointer-events: none;

  transition: all 0.7s ease;

  ${({ $show }) =>
    $show &&
    `top: calc((100vh - 252px) * -1 - 70px);
  opacity: 1;
  pointer-events: all;
`}
`;
