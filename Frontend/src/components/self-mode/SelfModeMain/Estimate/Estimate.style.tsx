import { colors } from '@/style/theme';
import { styled } from 'styled-components';

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

  opacity: 0;

  pointer-events: none;

  transition: all 0.7s ease;

  ${({ $show }) =>
    $show &&
    `top: calc((100vh - 252px) * -1 - 70px);
    opacity: 1;
    pointer-events: all;
  `}
`;
