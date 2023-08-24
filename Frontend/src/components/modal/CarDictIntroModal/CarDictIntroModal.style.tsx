import { colors } from '@/style/theme';
import { bodyRegular2, headMedium2, headRegular3 } from '@/style/typefaces';
import { styled } from 'styled-components';

export const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(242, 244, 247, 0.4);
  backdrop-filter: blur(2px);

  z-index: 999;
`;

export const Container = styled.div<{ $show: boolean }>`
  position: relative;

  width: fit-content;
  height: fit-content;
  padding: 50px 80px;

  border-radius: 6px;
  background-color: ${colors.coolGreyBlack};
  /* opacity: 0.9; */
  backdrop-filter: blur(2px);

  & > img {
    width: 600px;
    height: 310px;
    border-radius: 6px;
  }
  animation: ani 1s ease-in-out forwards;

  @keyframes ani {
    0% {
      opacity: 0;
      margin-top: 60px;
    }
    50% {
      opacity: 1;
      margin-top: -70px;
    }
    100% {
      opacity: 1;
      margin-top: -40px;
    }
  }
`;

export const Close = styled.div`
  position: absolute;
  top: 24px;
  right: 24px;

  cursor: pointer;
`;

export const Title = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  color: ${colors.hyundaiWhite};
  ${headRegular3}
  font-size: 20px;
`;

export const Text = styled.div`
  & > span {
    font-size: 20px;
    ${headMedium2}
  }
`;

export const Description = styled.div`
  margin: 12px 0 20px 2px;
  color: ${colors.coolGrey001};
  ${bodyRegular2}

  & > span {
    color: ${colors.iconYellow};
  }
`;
