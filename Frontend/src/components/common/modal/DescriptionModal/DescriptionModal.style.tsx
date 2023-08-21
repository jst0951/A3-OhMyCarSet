import { colors } from '@/style/theme';
import { headMedium2, popupRegular } from '@/style/typefaces';
import { styled } from 'styled-components';

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 360px;
  border-radius: 6px;
  background: ${colors.hyundaiWhite};
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.3);
`;

export const CloseButton = styled.div`
  position: absolute;
`;

export const TitleContainer = styled.div`
  margin-top: 8px;
  color: ${colors.mainHyundaiBlue};
  ${headMedium2};
`;

export const DescriptionContainer = styled.div`
  margin-top: 12px;
  color: ${colors.mainHyundaiBlue};
  opacity: 0.8;
  text-align: center;
  ${popupRegular};
`;
