import { styled } from 'styled-components';
import { colors } from '@/style/theme';
import { headMedium4, headRegular5 } from '@/style/typefaces';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1024px;
  padding-bottom: 210px;
  margin: 0 auto;
`;

export const Trim = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const OptionContainer = styled.div`
  margin-bottom: 60px;
`;

export const LineTitle = styled.div`
  border-bottom: 1px solid ${colors.coolGrey003};
  padding-bottom: 25px;
  ${headMedium4};
  color: ${colors.coolGreyBlack};
`;

export const interiorColorContainer = styled.div`
  height: 348px;
`;

export const exteriorColorContainer = styled.div`
  height: 420px;
`;

export const defaultOptionContainer = styled.div``;

export const SelfButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 100px;
  gap: 120px;
`;

export const GuideButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 100px;
  gap: 120px;
  width: 533px;
  height: 90px;
  border-radius: 6px;
  background: ${colors.coolGrey001};
`;

export const GuideButtonInside = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 80px;
  margin: 27px 33px;
`;
export const GuideButtonExplain = styled.div`
  color: ${colors.coolGreyBlack};
  overflow: hidden;
  ${headRegular5};
`;

export const GuideButtonLogoContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 8px;
`;

export const GuideButtonText = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${colors.coolGreyBlack};
  font-family: 'Hyundai Sans Head Medium';
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.96px;
`;
