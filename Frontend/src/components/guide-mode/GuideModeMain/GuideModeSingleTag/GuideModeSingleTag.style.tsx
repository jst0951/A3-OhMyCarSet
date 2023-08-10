import { colors } from '@/style/theme';
import { bodyMedium2 } from '@/style/typefaces';
import { styled } from 'styled-components';

export const TagListContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
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
  color: ${colors.coolGrey003};

  &:hover {
    color: #212121;
    background-color: ${colors.hyundaiWhite};
    border: 2px solid ${colors.mainHyundaiBlue};
  }
`;

export const TagName = styled.div`
  ${bodyMedium2}
`;
