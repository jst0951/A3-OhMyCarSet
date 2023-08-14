import { colors } from '@/style/theme';
import { bodyMedium2, popupRegular } from '@/style/typefaces';
import { styled } from 'styled-components';

export const SelfModeMultiContainer = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 110px);
  overflow: hidden;
`;

export const SelfModeImage = styled.div`
  width: 60%;
  height: 100%;
  background-color: ${colors.coolGrey001};

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const SelfModeOption = styled.div`
  width: 40%;
  padding: 12px 27px;
`;

export const FilterContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export const FilterButton = styled.div<{ $active: boolean }>`
  padding: 6px 20px;
  border-radius: 6px;
  background-color: ${colors.coolGrey001};
  ${popupRegular}
  color: ${colors.coolGrey003};

  ${({ $active }) =>
    $active &&
    `  
      background-color: ${colors.mainHyundaiBlue};
      ${bodyMedium2}
      color: ${colors.hyundaiWhite};`}
  line-height: 21px;

  cursor: pointer;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  height: 36px;
  margin: 26px 0;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  height: 36px;

  font-family: 'Hyundai Sans Head Medium';
  font-size: 24px;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: -0.96px;
`;

export const TitleText = styled.div`
  font-family: 'Hyundai Sans Head Regular';
  font-size: 24px;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: -0.96px;
`;

export const Count = styled.div`
  margin-left: 12px;
  font-family: 'Hyundai Sans Text KR';
  font-size: 14px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: -0.42px;
  color: ${colors.subActiveBlue};
`;

export const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  /* padding: 20px 0; */
  /* margin: 0 26px; */
  height: calc(100vh - 340px);
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;
