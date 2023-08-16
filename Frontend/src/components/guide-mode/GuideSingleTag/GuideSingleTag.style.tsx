import { colors } from '@/style/theme';
import { bodyMedium2 } from '@/style/typefaces';
import { styled } from 'styled-components';

export const TagListContainer = styled.div<{ $show: boolean; $step: number }>`
  position: absolute;
  top: ${({ $step }) => ($step === 1 ? `80px` : `152px`)};
  left: 0px;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;

  ${({ $show }) =>
    $show
      ? `
    opacity: 1;
    pointer-events: all;
    transition: opacity .5s ease-in-out;
  `
      : `
  opacity: 0;
  pointer-events: none;
    transition: opacity .5s ease-in-out;`}
`;

export const TagContainer = styled.div`
  display: inline-flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 343px;
  height: 60px;
  padding-left: 20px;
  padding-right: 15px;
  border-radius: 6px;
  background-color: ${colors.coolGrey001};
  border: 2px solid ${colors.coolGrey001};
  color: ${colors.coolGrey003};

  cursor: pointer;

  &:hover {
    color: #212121;
    background-color: ${colors.hyundaiWhite};
    border: 2px solid ${colors.mainHyundaiBlue};
    transition: all 0.3s ease;
  }

  &:hover svg {
    color: ${colors.mainHyundaiBlue};
  }
`;

export const TagName = styled.div`
  ${bodyMedium2}
`;
