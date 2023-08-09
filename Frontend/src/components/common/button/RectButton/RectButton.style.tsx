import { css, styled } from 'styled-components';
import { bodyMedium1, bodyMedium2 } from '@/style/typefaces';
import { colors } from '@/style/theme';
import { Props } from './RectButton';

const pageStyle = css<Props>`
  ${({ page = 'main' }) => {
    if (page === 'self') {
      return css`
        ${bodyMedium2};
        display: flex;
        width: 113px;
        padding: 14px 20px;
        justify-content: center;
        align-items: center;
      `;
    }
    if (page === 'guide') {
      return css`
        ${bodyMedium1};
        display: inline-flex;
        padding: 19px 120px;
        justify-content: center;
        align-items: center;
      `;
    }
    if (page === 'final') {
      return css`
        ${bodyMedium2};
        width: 244px;
        height: 57px;
      `;
    }
    if (page === 'ready') {
      return css`
        ${bodyMedium1};
        width: 343px;
        height: 55px;
      `;
    }
    if (page === 'modal') {
      return css`
        ${bodyMedium2};
        display: flex;
        width: 150px;
        padding: 14px 50px;
        justify-content: center;
        align-items: center;
      `;
    }
    return css`
      width: 140px;
      height: 50px;
    `;
  }}
`;

const typeStyle = css<Props>`
  ${({ type = 'recommended' }) => {
    if (type === 'notrecommended') {
      return css`
        background-color: ${colors.hyundaiGrey001};
        color: ${colors.mainHyundaiBlue};
      `;
    }
    if (type === 'etc') {
      return css`
        background-color: ${colors.hyundaiWhite};
        color: ${colors.hyundaiBlack};
        border: 1px solid #000;
      `;
    }
    return css`
      background-color: ${colors.mainHyundaiBlue};
      color: ${colors.hyundaiWhite};
    `;
  }}
`;

const RectButtonBase = styled.button<Props>`
  border-radius: 6px;
  ${pageStyle};
  ${typeStyle};
`;

export default RectButtonBase;
