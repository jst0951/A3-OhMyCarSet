import { colors } from '@/style/theme';
import { styled } from 'styled-components';

export const ImgContainer = styled.div`
  width: 194px;
  height: 144px;

  & > img {
    width: 100%;
    height: 100%;
    border-radius: 6px;
  }
`;

export const MainLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const MainRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
`;

export const SelectedName = styled.div`
  color: ${colors.coolGreyBlack};
  margin-left: 43px;
  font-family: 'Hyundai Sans Text Regular';
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: -0.6px;
`;

export const OptionPrice = styled.div`
  color: ${colors.coolGreyBlack};
  font-family: 'Hyundai Sans Text Regular';
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: -0.6px;
`;

export const Correction = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
  gap: 6px;
  color: ${colors.subActiveBlue};
  text-align: right;
  font-family: 'Hyundai Sans Text Regular';
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 23.4px;
  letter-spacing: -0.54px;
`;
