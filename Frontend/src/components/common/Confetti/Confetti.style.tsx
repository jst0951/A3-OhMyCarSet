import { styled, css } from 'styled-components';
import Keyframes from 'styled-components/dist/models/Keyframes';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const ConfettiDiv = styled.div<{
  $left: number;
  $width: number;
  $height: number;
  $color: string;
  $transform: number;
  $animation: Keyframes;
  $animation_iteration: number;
  $animation_delay: number;
  $animation_duration: number;
}>`
  position: absolute;
  opacity: 0;
  z-index: -1;
  left: ${({ $left }) => $left}%;
  width: ${({ $width }) => $width}px;
  height: ${({ $height }) => $height}px;
  background-color: ${({ $color }) => $color};
  transform: rotate(${({ $transform }) => $transform}deg);
  ${({ $animation, $animation_iteration }) => css`
    animation: ${$animation} 1s ${$animation_iteration} ease-in-out;
  `}
  animation-delay: ${({ $animation_delay }) => $animation_delay}s;
  animation-duration: ${({ $animation_duration }) => $animation_duration}s;
`;
