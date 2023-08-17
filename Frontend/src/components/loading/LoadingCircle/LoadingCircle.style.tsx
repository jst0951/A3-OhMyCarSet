import { css, styled } from 'styled-components';

export const CircleContainer = styled.div`
  position: relative;
  width: 180px;
  height: 180px;
`;

export const ProgressCircle = styled.circle`
  animation: progress 3s linear forwards;

  @keyframes progress {
    100% {
      stroke-dashoffset: 0;
    }
  }
`;

export const LoadingIcon = styled.div<{ $fade: number }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  ${({ $fade }) =>
    $fade === 1
      ? css`
          animation: fade1 1.5s forwards;
          animation-delay: 0.5s;
          animation-iteration-count: 2;
        `
      : css`
          opacity: 0;
          animation: fade2 1.5s forwards;
          animation-delay: 0.5s;
          animation-iteration-count: 2;
        `};

  @keyframes fade1 {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes fade2 {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
