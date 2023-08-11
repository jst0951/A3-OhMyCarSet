import { colors } from '@/style/theme';
import { headMedium2, headMedium3 } from '@/style/typefaces';
import { styled } from 'styled-components';

export const EstimateContainer = styled.div`
  width: 100%;
  height: 100%;
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

export const MainContainer = styled.div`
  height: 100%;
  overflow: auto;
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
  padding-bottom: 100px;
`;
