import { headRegular5 } from '@/style/typefaces';
import { styled } from 'styled-components';

export const LandingMainContainer = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 720px;
  background-color: black;
`;

export const LandingMainBackground = styled.div`
  position: relative;
  width: 100vw;
  height: 631px;
  background-image: url('src/asset/images/main_palisade2.png');
  background-size: cover;
`;

export const LandingDimmed = styled.div`
  position: absolute;
  bottom: 0;

  display: flex;
  justify-content: center;

  width: 100vw;
  height: 231px;

  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000 100%);
`;

export const LandingMainContent = styled.div`
  width: 1024px;
  /* min-width: 1024px; */
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

export const ShowMoreContainer = styled.div`
  position: absolute;
  bottom: 30px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  align-items: center;
`;

export const ShowMoreText = styled.div`
  ${headRegular5}
  color: white;
  opacity: 0.6;
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;

  cursor: pointer;

  svg {
    animation: arrow-wave 1s infinite;
    animation-direction: alternate;
  }

  svg:nth-child(1) {
    animation-delay: 0.1s;
  }

  svg:nth-child(2) {
    margin-top: -18px;
    animation-delay: 0.2s;
  }

  @keyframes arrow-wave {
    0% {
      opacity: 0.4;
    }
    50% {
      opacity: 0.6;
    }
    100% {
      opacity: 0.8;
    }
  }
`;
