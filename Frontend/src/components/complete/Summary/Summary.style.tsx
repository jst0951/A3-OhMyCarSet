import { headMedium3, headRegular4 } from '@/style/typefaces';
import { styled } from 'styled-components';

export const MainContainer = styled.div`
  height: 100%;
  overflow: auto;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  height: 44px;
  margin-bottom: 24px;
`;

export const Title = styled.div`
  ${headMedium3}
  color: #212121;
  margin-left: 24px;
  margin-bottom: 4px;
`;

export const rightTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;

export const subTitle = styled.div`
  ${headRegular4}
  color: #212121;
  margin-right: 14px;
  padding-bottom: 6px;
`;

export const TotalPrice = styled.div`
  color: #36383c;
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
  gap: 32px;
  margin-bottom: 28px;
`;
