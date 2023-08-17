import { colors } from '@/style/theme';
import { bodyMedium2, headRegular5, popupRegular } from '@/style/typefaces';
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

export const TitleTextContainer = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 24px;
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

export const SubTitle = styled.div`
  color: ${colors.coolGrey004};
  ${headRegular5};
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

export const FilterContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 16px;
  margin-bottom: 16px;
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

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

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

export const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 144px;
  align-items: center;
  justify-content: centergit;
  color: ${colors.coolGrey003};
  font-family: 'Hyundai Sans Text Regular';
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: -0.6px;
`;
