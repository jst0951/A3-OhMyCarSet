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
  cursor: pointer;
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
  min-height: 340px;
`;

export const ItemContainer = styled.div<{ $showMore: boolean }>`
  display: ${({ $showMore }) => ($showMore ? `space-between` : ` none`)};
  width: 1024px;
  height: 100%;
`;

export const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 240px;
  margin-bottom: 100px;

  /* border-bottom: 1px solid ${colors.coolGrey003}; */

  color: ${colors.coolGrey003};
  font-family: 'Hyundai Sans Text Regular';
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: -0.6px;
`;
