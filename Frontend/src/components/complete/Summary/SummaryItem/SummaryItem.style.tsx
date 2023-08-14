import { colors } from '@/style/theme';
import { headRegular4, headMedium1 } from '@/style/typefaces';
import { styled } from 'styled-components';

export const Section = styled.div`
  width: 1024px;
  margin: 0 auto;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 14px 24px;
  border-radius: 6px;
  background-color: ${colors.hyundaiGrey001};
`;

export const Title = styled.div`
  color: #212121;
  ${headMedium1}
`;

export const Price = styled.div`
  color: #36383c;
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
  flex-direction: column;
  gap: 12px;
  padding: 20px;
`;

export const Main = styled.div<{ $hidden: boolean }>`
  display: flex;
`;

export const CategoryName = styled.div`
  min-width: 80px;
  ${headRegular4}
  color:#8F8F8F;
`;

export const SelectedContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const SelectedName = styled.div`
  ${headRegular4}
  color: #212121;
`;

export const OptionPrice = styled.div`
  ${headRegular4}
  color: #212121;
`;
