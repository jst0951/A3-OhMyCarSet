import { styled } from 'styled-components';

export const SelfModeSingleContainer = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 110px);
  overflow: hidden;
`;

export const SelfModeImage = styled.div`
  width: 60%;
  height: 100%;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const SelfModeOption = styled.div`
  width: 40%;
  margin: 44px 0 0;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  height: 36px;
  margin: 26px 26px 10px;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  height: 36px;

  font-family: 'Hyundai Sans Head Medium';
  font-size: 24px;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: -0.96px;
`;

export const TitleText = styled.div`
  font-family: 'Hyundai Sans Head Regular';
  font-size: 24px;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: -0.96px;
`;

export const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px 0;
  margin: 0 26px;
  height: calc(100vh - 340px);
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;
