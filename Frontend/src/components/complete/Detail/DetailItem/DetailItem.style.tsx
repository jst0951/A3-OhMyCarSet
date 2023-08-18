import { colors } from '@/style/theme';
import { styled } from 'styled-components';

export const Section = styled.div`
  width: 1024px;
  margin: 0 auto;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 60px;
  padding-bottom: 12px;
  border-bottom: 1px solid ${colors.coolGrey003};
`;

export const Title = styled.div`
  color: ${colors.coolGreyBlack};
  font-family: 'Hyundai Sans Head Medium';
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 31.2px;
  letter-spacing: -0.72px;
`;

export const Price = styled.div`
  color: ${colors.coolGreyBlack};
  text-align: right;
  font-family: 'Hyundai Sans Head Medium';
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 31.2px;
  letter-spacing: -0.72px;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ImgContainer = styled.div`
  & > img {
    width: 194px;
    height: 144px;
    border-radius: 6px;
    object-fit: cover;
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
  font-weight: 500;
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
  cursor: pointer;
`;
