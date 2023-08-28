import { colors } from '@/style/theme';
import { bodyRegular3, headMedium2, headMedium5 } from '@/style/typefaces';
import { styled } from 'styled-components';

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 343px;
  height: 380px;
  border-radius: 6px;

  background: ${colors.hyundaiWhite};
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.3);
`;

export const TitleContainer = styled.div`
  margin-top: 8px;
  color: ${colors.mainHyundaiBlue};
  ${headMedium2};
`;

export const SelfMode = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding-left: 18px;
  padding-right: 10px;
  margin-top: 20px;

  width: 301px;
  height: 116px;
  border: 1px solid ${colors.mainHyundaiBlue};
  border-radius: 6px;

  cursor: pointer;
`;

export const SelfRight = styled.div``;

export const SelfLeft = styled.div``;

export const SelfHeader = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

export const SelfTitle = styled.div`
  ${headMedium5};
`;

export const SelfProcessing = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 54px;
  height: 16px;
  border-radius: 2px;
  background: #b0c9e3;

  color: ${colors.mainHyundaiBlue};
  font-family: 'Hyundai Sans Text Medium';
  font-size: 10px;
  font-weight: 500;
  line-height: 13px;
  letter-spacing: -0.3px;
`;

export const SelfText = styled.div`
  margin-top: 8px;

  opacity: 0.5;

  ${bodyRegular3};
`;

export const GuideMode = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding-left: 18px;
  padding-right: 10px;
  margin-top: 8px;

  width: 301px;
  height: 116px;
  border-radius: 6px;

  background-color: #4ca7ce;
  color: ${colors.hyundaiWhite};

  cursor: pointer;
`;

export const GuideRight = styled.div``;

export const GuideLeft = styled.div``;

export const GuideHeader = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

export const GuideTitle = styled.div`
  ${headMedium5};
`;

export const GuideProcessing = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 54px;
  height: 16px;
  border-radius: 2px;
  background: #b0c9e3;

  color: ${colors.mainHyundaiBlue};
  font-family: 'Hyundai Sans Text Medium';
  font-size: 10px;
  font-weight: 500;
  line-height: 13px;
  letter-spacing: -0.3px;
`;

export const GuideText = styled.div`
  margin-top: 8px;

  color: ${colors.hyundaiWhite};

  ${bodyRegular3};
`;
