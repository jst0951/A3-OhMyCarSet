import { colors } from '@/style/theme';
import { headMedium2, headRegular4 } from '@/style/typefaces';
import { styled } from 'styled-components';

export const MainContainer = styled.div`
  height: 100%;
  width: 1024px;
  overflow: auto;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  height: 44px;
`;

export const Title = styled.div`
  color: ${colors.coolGreyBlack};
  margin-bottom: 2px;
  ${headMedium2}
`;

export const RightTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;

export const SubTitle = styled.div`
  ${headRegular4}
  color: ${colors.coolGreyBlack};
  margin-right: 14px;
  margin-bottom: 6px;
`;

export const TotalPrice = styled.div`
  color: ${colors.coolGreyBlack};
  text-align: right;
  font-family: 'Hyundai Sans Head Medium';
  font-size: 34px;
  font-style: normal;
  font-weight: 500;
  line-height: 44.2px;
  letter-spacing: -1.02px;
`;

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
  margin-bottom: 60px;
`;
