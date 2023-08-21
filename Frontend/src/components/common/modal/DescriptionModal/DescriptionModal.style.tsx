import { colors } from '@/style/theme';
import { headMedium2, popupRegular } from '@/style/typefaces';
import { styled } from 'styled-components';

export const ModalContainer = styled.div`
  width: 500px;
  height: 450px;

  padding-top: 20px;

  border-radius: 6px;
  background: ${colors.hyundaiWhite};
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.3);
`;

export const CloseButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

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
  margin-top: 8px;
  margin-bottom: 20px;

  color: ${colors.mainHyundaiBlue};
  ${headMedium2};
`;

export const DescriptionContainer = styled.div`
  width: 300px;

  margin-top: 20px;
  color: ${colors.mainHyundaiBlue};
  opacity: 0.8;
  text-align: center;
  word-break: keep-all;
  ${popupRegular};
`;
