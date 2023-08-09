import { colors } from '@/style/theme';
import { headMedium4, bodyRegular2 } from '@/style/typefaces';
import { styled } from 'styled-components';

interface ContainerProps {
  bgColor: string;
}

export const LineTitle = styled.div`
  border-bottom: 1px solid ${colors.coolGreyBlack};
  padding-bottom: 25px;
  ${headMedium4};
`;

export const ExteriorColorContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 32px;
  padding-left: 41px;
  padding-right: 37px;
  gap: 90px;
`;

export const ExteriorColorItemLine = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ExteriorColorItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
`;

export const ExteriorColorItem = styled.div<ContainerProps>`
  border-radius: 50%;
  background-color: ${(props) => props.bgColor};
  width: 20px;
  height: 20px;
`;

export const ExteriorColorFirstItem = styled.div<ContainerProps>`
  border-radius: 50%;
  background-color: ${(props) => props.bgColor};
  border: 1px solid ${colors.coolGrey002};
  width: 20px;
  height: 20px;
`;

export const ExteriorColorItemDescription = styled.div`
  ${bodyRegular2};
  color: ${colors.coolGrey004};
`;
