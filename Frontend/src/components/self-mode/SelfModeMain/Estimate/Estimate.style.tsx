import { colors } from '@/style/theme';
import { bodyRegular2, headMedium2, headMedium3, headMedium4 } from '@/style/typefaces';
import { styled } from 'styled-components';

export const EstimateContainer = styled.div<{ $show: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  /* max-width: 375px;
  min-height: 468px; */
  width: 375px;
  height: calc(100vh - 252px);
  /* margin: 0 7px; */
  border-radius: 6px;
  border: 2px solid ${colors.coolGrey001};
  background-color: ${colors.hyundaiWhite};
  box-shadow: 0px 4px 14px 0px rgba(104, 104, 104, 0.1);

  opacity: 0;

  pointer-events: none;

  transition: all 0.7s ease;

  ${({ $show }) =>
    $show &&
    `top: calc((100vh - 252px) * -1 - 70px);
    opacity: 1;
    pointer-events: all;
  `}
`;

export const CloseContainer = styled.div`
  display: flex;
  width: auto;
  justify-content: flex-end;
  padding: 16px 16px 10px;

  & > svg {
    cursor: pointer;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 36px;
`;

export const Title = styled.div`
  ${headMedium3}
  color: ${colors.coolGreyBlack};
`;

export const TotalPrice = styled.div`
  ${headMedium2}
  color: ${colors.mainHyundaiBlue};
`;

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

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
  padding: 20px;
`;

export const SectionMain = styled.div`
  display: flex;
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
  ${bodyRegular2}
  color: ${colors.coolGreyBlack};
`;

export const OptionPrice = styled.div`
  ${bodyRegular2}
  color: ${colors.coolGreyBlack};
`;
