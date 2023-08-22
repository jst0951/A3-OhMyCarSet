import { colors } from '@/style/theme';
import { headMedium1, popupRegular } from '@/style/typefaces';
import { styled } from 'styled-components';

export const ModalContainer = styled.div`
  position: relative;

  padding: 50px 80px 60px 80px;

  border-radius: 6px;
  background: ${colors.hyundaiWhite};
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.3);
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 20px;
  margin-right: 20px;

  cursor: pointer;
`;

export const ModalMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TitleContainer = styled.div`
  max-width: 500px;

  margin-top: 8px;
  margin-bottom: 20px;

  color: ${colors.mainHyundaiBlue};
  word-break: keep-all;
  ${headMedium1};
`;

export const DescriptionContainer = styled.div`
  width: 350px;

  margin-top: 40px;

  color: ${colors.mainHyundaiBlue};
  opacity: 0.8;
  word-break: keep-all;
  white-space: pre-wrap;
  ${popupRegular};
`;
