import { colors } from '@/style/theme';
import { headRegular4, bodyMedium2 } from '@/style/typefaces';
import { styled } from 'styled-components';

export const TagListContainer = styled.div<{ $show: boolean }>`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 344px;
  gap: 32px;

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

export const TagSubContainer = styled.div``;

export const TagSubListTitle = styled.div`
  ${headRegular4}
  margin-bottom: 12px;
`;

export const TagSubListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 12px;
`;

export const TagContainer = styled.div<{ $selected: boolean; $disable: boolean }>`
  display: inline-flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 166px;
  height: 60px;
  padding-left: 20px;
  padding-right: 18px;
  border-radius: 6px;
  background-color: ${colors.coolGrey001};
  border: 2px solid ${colors.coolGrey001};
  color: ${colors.coolGrey003};

  cursor: pointer;

  &:hover {
    ${({ $disable }) =>
      !$disable &&
      `
    color: #212121;
    background-color: ${colors.hyundaiWhite};
    border: 2px solid ${colors.mainHyundaiBlue};
    transition: all 0.3s ease;
    `}
  }

  transition: all 0.3s ease;

  ${({ $selected }) =>
    $selected &&
    `
    color: #212121;
    background-color: ${colors.hyundaiWhite};
    border: 2px solid ${colors.mainHyundaiBlue};
  `}
`;

export const TagName = styled.div`
  ${bodyMedium2}
`;

export const TagOrder = styled.div`
  display: flex;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  background-color: ${colors.mainHyundaiBlue};
  color: ${colors.hyundaiWhite};
  font-style: normal;
  ${bodyMedium2};
`;
