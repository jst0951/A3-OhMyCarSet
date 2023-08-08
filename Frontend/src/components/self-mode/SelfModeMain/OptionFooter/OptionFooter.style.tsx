import { colors } from '@/style/theme';
import { bodyMedium2, headMedium1 } from '@/style/typefaces';
import { styled } from 'styled-components';

export const OptionFooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 375px;
  height: 80px;
  padding: 0 7px;
  margin: 0 26px;
  background-color: ${colors.hyundaiWhite};
`;

export const FooterDimmed = styled.div`
  position: absolute;
  top: -70px;
  left: 0;
  width: 100%;
  height: 70px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, #ffffff 80%);

  pointer-events: none;
`;

export const TotalPriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const TotalPriceButton = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  ${bodyMedium2}
  color: ${colors.coolGrey003};

  cursor: pointer;
`;

export const TotalPrice = styled.div`
  ${headMedium1}
  color: ${colors.coolGreyBlack};
`;

export const CompleteButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 6px;
  height: 46px;
`;

export const PrevButton = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px;

  ${bodyMedium2}
  color: ${colors.coolGrey003};

  cursor: pointer;
`;
