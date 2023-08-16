import { colors } from '@/style/theme';
import { styled } from 'styled-components';

export const IndicatorContainer = styled.div`
  position: relative;
  height: 33px;
  margin-bottom: 17px;
`;

export const Indicator = styled.div<{ $id: number; $isPrev: boolean; $isNext: boolean }>`
  position: absolute;
  left: ${({ $id }) => `${($id - 1) * 49}px`};
  display: flex;
  width: 33px;
  height: 33px;

  align-items: center;
  justify-content: center;

  border-radius: 50%;

  color: ${colors.hyundaiWhite};
  font-family: 'Hyundai Sans Text Regular';
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: -0.8px;

  cursor: pointer;

  background-color: #dfdfdf;

  ${(props) =>
    props.$id === 1 &&
    props.$isNext &&
    `
    background-color: ${colors.mainHyundaiBlue};
  `}

  ${(props) =>
    props.$isPrev &&
    `
    transition: all 0.15s linear;
    animation: move-right 0.3s linear;
    animation-fill-mode: forwards;
  `}
  ${(props) =>
    props.$isNext &&
    props.$id !== 1 &&
    `
    transition: all 0.15s linear;
    animation: move-left 0.3s linear;
    animation-fill-mode: forwards;
  `}
    @keyframes move-right {
    0% {
      left: ${({ $id }) => `${($id - 2) * 49}px`};
      background-color: ${colors.mainHyundaiBlue};
      z-index: 1;
    }
    49% {
      background-color: ${colors.mainHyundaiBlue};
      z-index: 1;
    }
    50% {
      left: ${({ $id }) => `${($id - 2) * 49 + 24.5}px`};
      background-color: #dfdfdf;
      z-index: 0;
    }
    100% {
      left: ${({ $id }) => `${($id - 2) * 49}px`};
      background-color: #dfdfdf;
      z-index: 0;
    }
  }

  @keyframes move-left {
    0% {
      left: ${({ $id }) => `${($id - 1) * 49}px`};
      background-color: #dfdfdf;
      z-index: 0;
    }
    49% {
      background-color: #dfdfdf;
      z-index: 0;
    }
    50% {
      left: ${({ $id }) => `${($id - 1) * 49 - 24.5}px`};
      background-color: ${colors.mainHyundaiBlue};
      z-index: 1;
    }
    100% {
      left: ${({ $id }) => `${($id - 1) * 49}px`};
      background-color: ${colors.mainHyundaiBlue};
      z-index: 1;
    }
  }
`;
