import { css, styled } from 'styled-components';
import { bodyMedium2, popupRegular } from '@/style/typefaces';
import { colors } from '@/style/theme';
import { Props } from './RectFilterButton';

const pageStyle = css<Props>`
  ${({ page = 'mainFilter' }) => {
    if (page === 'selfFilter') {
      return css`
        display: flex;
        height: 32px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      `;
    }
    return css`
      display: flex;
      height: 32px;
      padding: 6px 22px;
      justify-content: center;
      align-items: center;
    `;
  }}
`;

const typeStyle = css<Props>`
  ${({ type = 'selected' }) => {
    if (type === 'notselected') {
      return css`
        ${popupRegular};
        background-color: ${colors.coolGrey001};
        color: #6a6e76;
      `;
    }
    return css`
      ${bodyMedium2};
      background-color: ${colors.mainHyundaiBlue};
      color: ${colors.hyundaiWhite};
    `;
  }}
`;

const RectFilterButtonBase = styled.button<Props>`
  border-radius: 6px;
  ${pageStyle};
  ${typeStyle};
`;

export default RectFilterButtonBase;
