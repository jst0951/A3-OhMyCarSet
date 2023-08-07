import { colors } from '@/style/theme';
import { bodyMedium3, headMedium4, headRegular6 } from '@/style/typefaces';
import { styled } from 'styled-components';

export const TrimInfoWithTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
`;

export const TrimInfo = styled.div`
  display: flex;
  gap: 12px;
`;

export const TrimInfoIndex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 19px;
  height: 19px;
  margin: 0 auto;

  border-radius: 50%;
  background-color: ${colors.mainHyundaiBlue};
  ${bodyMedium3}
  box-shadow: 0px 2px 12px rgba(44, 44, 44, 0.3);
`;

export const TrimInfoTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-shadow: 0px 2px 12px rgba(44, 44, 44, 0.3);
`;

export const InfoMainText = styled.div`
  ${headMedium4}
  line-height: 17px;
  font-weight: 400;
  text-shadow: 0px 2px 12px rgba(44, 44, 44, 0.3);
`;

export const InfoSubText = styled.div`
  ${headRegular6}
  line-height: 16px;
  text-shadow: 0px 2px 12px rgba(44, 44, 44, 0.3);
`;
