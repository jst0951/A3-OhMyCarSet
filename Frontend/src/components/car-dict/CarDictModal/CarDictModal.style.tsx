import { colors } from '@/style/theme';
import { bodyRegular3, headMedium4, popupRegular } from '@/style/typefaces';
import { css, styled } from 'styled-components';

export const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;

  z-index: 999;
`;

export const Modal = styled.div<{ $inMode: boolean }>`
  position: absolute;

  width: 375px;
  min-height: 165px;
  padding: 16px 20px 21px;

  border-radius: 6px;
  background-color: ${colors.coolGreyBlack};
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.3);

  z-index: 5;

  ${({ $inMode }) =>
    $inMode
      ? css`
          right: calc(40vw - 401px);
          bottom: 110px;
        `
      : css`
          right: 40px;
          bottom: 40px;
        `}
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 12px;
  margin-bottom: 16px;
  border-bottom: 1px solid ${colors.coolGrey004};
`;

export const TitleContainer = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
`;

export const Title = styled.div`
  ${headMedium4}
  color: ${colors.hyundaiWhite};
`;

export const CloseButton = styled.div`
  display: inline-flex;
  padding: 5px 9px;
  border-radius: 2px;
  background-color: ${colors.coolGrey004};

  ${bodyRegular3}
  color: ${colors.hyundaiWhite};
  line-height: 16px;

  cursor: pointer;

  &:hover {
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.1);
  }
`;

export const Image = styled.div`
  width: 100%;
  padding-bottom: 16px;
  border-radius: 4px;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Description = styled.div`
  ${popupRegular}
  color: ${colors.hyundaiWhite};
  word-break: keep-all;
`;
