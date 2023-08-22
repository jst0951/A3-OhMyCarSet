import { colors } from '@/style/theme';
import { bodyRegular2, headMedium4 } from '@/style/typefaces';
import { styled } from 'styled-components';

export const Section = styled.div``;

export const SectionTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px 7px;
  background-color: ${colors.coolGrey001};
  ${headMedium4}
`;

export const SectionTitle = styled.div`
  color: ${colors.coolGreyBlack};
`;

export const Price = styled.div`
  color: ${colors.mainHyundaiBlue};
`;

export const SectionMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 20px;
`;

export const SectionMain = styled.div<{ $hidden: boolean }>`
  display: flex;

  /* ${({ $hidden }) => $hidden && `opacity: 0;`} */
`;

export const CategoryName = styled.div`
  min-width: 80px;
  ${bodyRegular2}
  color: ${colors.coolGrey003};
`;

export const SelectedContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const SelectedName = styled.div`
  max-width: 160px;
  ${bodyRegular2}
  color: ${colors.coolGreyBlack};
  word-break: keep-all;
`;

export const OptionPrice = styled.div`
  ${bodyRegular2}
  color: ${colors.coolGreyBlack};
`;
