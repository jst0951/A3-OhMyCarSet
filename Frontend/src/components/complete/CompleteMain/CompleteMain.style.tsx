import { colors } from '@/style/theme';
import { headRegular4 } from '@/style/typefaces';
import { css, styled } from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1024px;
  margin: 0 auto;
`;

export const GuideText = styled.div`
  width: 294px;
  margin-top: 64px;
  color: #212121;
  text-align: center;
  font-family: 'Hyundai Sans Head Medium';
  font-size: 34px;
  font-style: normal;
  font-weight: 500;
  line-height: 47.6px;
  letter-spacing: -1.36px;
`;

export const CarImg = styled.div<{ $isExternal: boolean }>`
  width: 589px;
  height: 326px;
  margin: 20px;
  ${({ $isExternal }) => !$isExternal && ``}

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const InternalExternal = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 13px;
`;

export const Button = styled.div<{ $isExternal: boolean }>`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;

  padding: 8px 32px;

  ${headRegular4}

  cursor: pointer;

  ${({ $isExternal }) =>
    $isExternal
      ? css`
          color: ${colors.hyundaiWhite};
          background-color: ${colors.mainHyundaiBlue};
        `
      : css`
          color: ${colors.mainHyundaiBlue};
          background-color: ${colors.hyundaiGrey002};
        `}
`;

export const SummaryContainer = styled.div`
  margin-top: 52px;
`;

export const ButtonLine = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 80px;
`;

export const DetailContainer = styled.div``;
