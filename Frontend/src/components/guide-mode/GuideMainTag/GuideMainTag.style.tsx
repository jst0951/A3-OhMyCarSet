import { styled } from 'styled-components';
import { colors } from '@/style/theme';
export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: calc(100vh - 110px);
  min-height: 600px;
  align-items: center;
  justify-content: space-between;
  width: 1024px;
  margin: 0 auto;
`;

export const MainLeftContainer = styled.div`
  height: 310px;
  margin: auto 0;
`;

export const MainRightContainer = styled.div`
  position: relative;
  width: 344px;
  height: 570px;
`;

export const DescriptionContainer = styled.div`
  position: relative;
  width: 454px;
  height: 196px;
`;

export const Description = styled.div<{ $hidden: boolean }>`
  position: absolute;
  top: 0;
  left: 0;

  ${({ $hidden }) =>
    $hidden
      ? `
      
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
  `
      : `
    opacity: 1;
    transition: opacity 0.2s ease-in-out;
  `}
`;

export const MainDescription = styled.div`
  margin-top: 17px;
  color: ${colors.hyundaiBlack};
  font-family: 'Hyundai Sans Head Regular';
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 44.8px;
  letter-spacing: -1.28px;
`;

export const MainDescriptionBold = styled.div`
  color: ${colors.hyundaiBlack};
  font-family: 'Hyundai Sans Head Medium';
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 44.8px;
  letter-spacing: -1.28px;

  white-space: pre-line;
`;

export const SubDescription = styled.div`
  color: #8c8c8c;
  font-family: 'Hyundai Sans Text Regular';
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.6px;
  margin-top: 16px;
`;

export const ButtonContainer = styled.div<{ $hidden: boolean }>`
  margin-top: 24px;

  visibility: ${({ $hidden }) => ($hidden ? `hidden` : `visible`)};
`;
