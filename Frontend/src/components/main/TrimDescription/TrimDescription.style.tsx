import { trimBorderImage } from '@/asset';
import { headRegular4 } from '@/style/typefaces';
import { styled } from 'styled-components';

export const TrimDescriptionCard = styled.div`
  width: 609px;
  height: 237px;

  border-radius: 6px;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%);
  backdrop-filter: blur(6px);

  color: white;
  z-index: 1;
`;

export const TrimDescriptionBorder = styled.div`
  display: flex;
  gap: 50px;
  width: 100%;
  height: 100%;
  padding: 37px 26px 37px 33px;
  border-radius: 6px;
  background-image: url(${trimBorderImage});
  background-size: cover;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin: auto 0;
`;

export const TrimSubTitle = styled.div`
  ${headRegular4}
`;

export const TrimTitle = styled.div`
  font-family: 'Hyundai Sans Head Medium';
  font-size: 32px;
  font-weight: 500;
  line-height: 34px;
  letter-spacing: -0.96px;
`;

export const TrimInformationContainer = styled.div``;
