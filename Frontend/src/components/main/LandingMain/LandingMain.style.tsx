import { styled } from 'styled-components';

export const LandingMainBackground = styled.div`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 720px;
  background-image: url('src/asset/images/main_palisade1.png');
  background-size: cover;
`;

export const LandingMainContainer = styled.div`
  width: 1024px;
  margin: 0 auto;
`;

export const LandingMainTextContainer = styled.div`
  position: absolute;
  top: 100px;
`;

export const LandingSubText = styled.div`
  font-family: 'Hyundai Sans Head Regular';
  font-size: 24px;
  font-weight: 400;
  line-height: 31.2px;
  letter-spacing: -0.96px;
  color: white;
`;

export const LandingMainText = styled.div`
  font-family: 'Hyundai Sans Head Medium';
  font-size: 64px;
  font-weight: 500;
  line-height: 83.2px;
  color: white;
`;
